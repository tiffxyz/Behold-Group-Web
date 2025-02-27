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
    return jsonify({
        'id': current_user.id,
        'username': current_user.username,
        'email': current_user.email,
        'bio': getattr(current_user, 'bio', ''),
        'profile_image_url': getattr(current_user, 'profile_image_url', None)
    })


@user_routes.route('/profile', methods=['PUT'])
@login_required
def update_profile():
    """
    Update current user's profile
    """
    try:
        # Get form data
        username = request.form.get('username')
        bio = request.form.get('bio')

        # Handle profile image upload if present
        profile_image_url = None
        if 'profile_image' in request.files and request.files['profile_image'].filename:
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

        if profile_image_url:
            user.profile_image_url = profile_image_url

        db.session.commit()

        return jsonify({
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'bio': getattr(user, 'bio', ''),
            'profile_image_url': getattr(user, 'profile_image_url', None)
        })

    except Exception as e:
        db.session.rollback()
        return jsonify({'errors': {'message': str(e)}}), 500
