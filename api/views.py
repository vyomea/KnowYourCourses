from flask import Blueprint, jsonify, request
from classify_class import getCourseDifficulty
main = Blueprint("main", __name__)

main = Blueprint("main", __name__)

@main.route('/rating')
def getRating():
    rating = ""
    comment = ""
    name = request.args.get('name')
    courseName = request.args.get('courseName')
    courseNumber = request.args.get('courseNumber')
    [rating,comment] = getCourseDifficulty(name,courseName+" "+courseNumber)
    #rating = "hench"
    if(rating):
        return jsonify({'rating':rating})
    rating = "-1"
    return jsonify({'rating':rating,'comment':comment})