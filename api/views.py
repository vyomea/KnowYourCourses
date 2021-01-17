from flask import Blueprint, jsonify

main = Blueprint("main", __name__)

@main.route('/rating')
def getRating():
    rating = 0

    return jsonify({'rating':rating})