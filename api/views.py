from flask import Blueprint, jsonify, request

main = Blueprint("main", __name__)

main = Blueprint("main", __name__)

@main.route('/rating')
def getRating():
    rating = 0
    name = request.args.get('name')
    courseName = request.args.get('courseName')
    courseNumber = request.args.get('courseNumber')

    return jsonify({'rating':rating,'name':name,'courseName':courseName,'courseNumber':courseNumber})