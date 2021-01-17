from flask import Blueprint, jsonify

@main.route('/rating')
def getRating():
    rating = 0

    return jsonify({'rating':rating})