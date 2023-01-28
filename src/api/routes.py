"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import hashlib

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/createaccount', methods=['POST'])
def create_account():
    body = request.get_json(force = True)
    email = body['email']
    password = str(hashlib.sha256(body['password'].encode()))
    has_email = User.query.filter_by(email = email).first()
    if has_email is None:
        new_user = User(email = email, password = password, is_active = True)
        db.session.add(new_user)
        db.session.commit()
        return jsonify('Successfully created account!')
    else:
        return 'User already exists :('
