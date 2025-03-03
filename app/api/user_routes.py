from flask import Blueprint, jsonify, request, current_app
from flask_login import login_required, current_user
from app.models import User, db
from werkzeug.utils import secure_filename
import os
from datetime import datetime

user_routes = Blueprint('users', __name__)

# Helper function to handle profile image uploads
def handle_image_upload(file):
    if not file:
        return None

    # Create uploads directory if it doesn't exist
    uploads_dir = os.path.join(current_app.root_path, 'static', 'uploads', 'profile_images')
    os.makedirs(uploads_dir, exist_ok=True)

    # Get file extension and create a unique filename
    filename = secure_filename(file.filename)
    # Add timestamp to filename to make it unique
    timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
    name, ext = os.path.splitext(filename)
    unique_filename = f"{current_user.id}_{name}_{timestamp}{ext}"

    # Save the file
    file_path = os.path.join(uploads_dir, unique_filename)
    file.save(file_path)

    # Return the URL path that can be accessed publicly
    return f"/static/uploads/profile_images/{unique_filename}"

@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/profile')
@login_required
def get_profile():
    """
    Get current user's profile data
    """
    return current_user.to_dict()


@user_routes.route('/profile', methods=['PUT'])
@login_required
def update_profile():
    """
    Update current user's profile
    """
    try:
        # Get form data or JSON data
        data = request.form if request.form else request.get_json()

        username = data.get('username')
        bio = data.get('bio')
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        company_name = data.get('companyName')

        # Handle profile image upload if present
        profile_image_url = None
        if request.files and 'profile_image' in request.files and request.files['profile_image'].filename:
            profile_image_url = handle_image_upload(request.files['profile_image'])

        # Update user data in the database
        user = current_user

        if username:
            # Check if username is already taken by another user
            existing_user = User.query.filter(User.username == username, User.id != user.id).first()
            if existing_user:
                return jsonify({'errors': {'username': 'Username already taken'}}), 400
            user.username = username

        if bio is not None:  # Allow empty bio
            user.bio = bio

        if first_name is not None:
            user.first_name = first_name

        if last_name is not None:
            user.last_name = last_name

        if company_name is not None:
            user.company_name = company_name

        if profile_image_url:
            user.profile_image_url = profile_image_url

        db.session.commit()

        return current_user.to_dict()

    except Exception as e:
        db.session.rollback()
        return jsonify({'errors': {'message': str(e)}}), 500
