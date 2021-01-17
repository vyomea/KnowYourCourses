<<<<<<< HEAD
from flask import Blueprint, jsonify

main = Blueprint("main", __name__)

@main.route('/rating')
def getRating():
    rating = 0

=======
from flask import Blueprint, jsonify

@main.route('/rating')
def getRating():
    rating = 0

>>>>>>> 377ce21e0033dc241b0bfdbc5463e4de6a932b13
    return jsonify({'rating':rating})