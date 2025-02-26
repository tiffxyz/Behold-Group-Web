# from flask import Blueprint, request
# from app.models import User, db
# from app.forms import LoginForm
# from app.forms import SignUpForm
# from flask_login import current_user, login_user, logout_user, login_required

# auth_routes = Blueprint('auth', __name__)


# @auth_routes.route('/')
# def authenticate():
#     """
#     Authenticates a user.
#     """
#     if current_user.is_authenticated:
#         return current_user.to_dict()
#     return {'errors': {'message': 'Unauthorized'}}, 401


# @auth_routes.route('/login', methods=['POST'])
# def login():
#     """
#     Logs a user in
#     """
#     form = LoginForm()
#     # Get the csrf_token from the request cookie and put it into the
#     # form manually to validate_on_submit can be used
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         # Add the user to the session, we are logged in!
#         user = User.query.filter(User.email == form.data['email']).first()
#         login_user(user)
#         return user.to_dict()
#     return form.errors, 401


# @auth_routes.route('/logout')
# def logout():
#     """
#     Logs a user out
#     """
#     logout_user()
#     return {'message': 'User logged out'}


# # @auth_routes.route('/signup', methods=['POST'])
# # def sign_up():
# #     """
# #     Creates a new user and logs them in
# #     """
# #     form = SignUpForm()
# #     form['csrf_token'].data = request.cookies['csrf_token']
# #     if form.validate_on_submit():
# #         user = User(
# #             username=form.data['username'],
# #             email=form.data['email'],
# #             password=form.data['password']
# #         )
# #         db.session.add(user)
# #         db.session.commit()
# #         login_user(user)
# #         return user.to_dict()
# #     return form.errors, 401
# # def sign_up():
# #     """
# #     Creates a new user and logs them in
# #     """
# #     form = SignUpForm()

# #     # Only try to validate CSRF if it's enabled
# #     if app.config.get('WTF_CSRF_ENABLED', True):
# #         try:
# #             form['csrf_token'].data = request.cookies['csrf_token']
# #         except KeyError:
# #             return {'errors': {'csrf': 'CSRF token missing'}}, 400
# @auth_routes.route('/signup', methods=['POST'])
# def sign_up():
#     """
#     Creates a new user and logs them in
#     """
#     form = SignUpForm()

#     # Only try to set the CSRF token if WTF_CSRF_ENABLED is True
#     if current_app.config.get('WTF_CSRF_ENABLED', True):
#         try:
#             form['csrf_token'].data = request.cookies['csrf_token']
#         except KeyError:
#             # CSRF token is missing, but we'll handle it based on the config
#             pass

#     # For CSRF disabled environments, we need to skip validate_on_submit
#     # and manually validate the form data
#     if not current_app.config.get('WTF_CSRF_ENABLED', True) or form.validate_on_submit():
#         # If CSRF is disabled or validation succeeds
#         if not current_app.config.get('WTF_CSRF_ENABLED', True):
#             # Get data from JSON if CSRF is disabled
#             data = request.get_json()
#             username = data.get('username')
#             email = data.get('email')
#             password = data.get('password')
#         else:
#             # Get data from the validated form
#             username = form.data['username']
#             email = form.data['email']
#             password = form.data['password']
#     # Continue with form validation and user creation
#     if form.validate_on_submit():
#         user = User(
#             username=form.data['username'],
#             email=form.data['email'],
#             password=form.data['password']
#         )
#         db.session.add(user)
#         db.session.commit()
#         login_user(user)
#         return user.to_dict()

#     return form.errors, 401

# @auth_routes.route('/unauthorized')
# def unauthorized():
#     """
#     Returns unauthorized JSON when flask-login authentication fails
#     """
#     return {'errors': {'message': 'Unauthorized'}}, 401



from flask import Blueprint, request, current_app
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': {'message': 'Unauthorized'}}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()

    # Only try to set the CSRF token if WTF_CSRF_ENABLED is True
    if current_app.config.get('WTF_CSRF_ENABLED', True):
        try:
            form['csrf_token'].data = request.cookies['csrf_token']
        except KeyError:
            # CSRF token is missing, but we'll handle it based on the config
            pass

    # For CSRF disabled environments, we need to skip validate_on_submit
    # and manually validate the form data
    if not current_app.config.get('WTF_CSRF_ENABLED', True) or form.validate_on_submit():
        # If CSRF is disabled or validation succeeds
        if not current_app.config.get('WTF_CSRF_ENABLED', True):
            # Get data from JSON if CSRF is disabled
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')
            user = User.query.filter(User.email == email).first()
            if not user or not user.check_password(password):
                return {'errors': {'email': 'Email or password is incorrect'}}, 401
        else:
            # User was validated by the form
            user = User.query.filter(User.email == form.data['email']).first()

        # Log the user in
        login_user(user)
        return user.to_dict()

    return form.errors, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()

    # Only try to set the CSRF token if WTF_CSRF_ENABLED is True
    if current_app.config.get('WTF_CSRF_ENABLED', True):
        try:
            form['csrf_token'].data = request.cookies['csrf_token']
        except KeyError:
            # CSRF token is missing, but we'll handle it based on the config
            pass

    # For CSRF disabled environments, we need to skip validate_on_submit
    # and manually validate the form data
    if not current_app.config.get('WTF_CSRF_ENABLED', True) or form.validate_on_submit():
        # If CSRF is disabled or validation succeeds
        if not current_app.config.get('WTF_CSRF_ENABLED', True):
            # Get data from JSON if CSRF is disabled
            data = request.get_json()
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
        else:
            # Get data from the validated form
            username = form.data['username']
            email = form.data['email']
            password = form.data['password']

        # Create and save the new user
        user = User(
            username=username,
            email=email,
            password=password
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()

    return form.errors, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': {'message': 'Unauthorized'}}, 401
