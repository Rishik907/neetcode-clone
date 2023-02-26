const courseModel = require('../models/courseModel')

module.exports.getAllcourses = async function(){
    return await courseModel.find({});
}


module.exports.createFirstCourse = async function(){
    const courses = await courseModel.find({});
    if (courses && courses.length ==0){
        
        const firstCourseInput = {
            "title": "bz DSA", 
            "level" : "easy",
        };
        const course = new courseModel(firstCourseInput);
        await course.save();
    }
}