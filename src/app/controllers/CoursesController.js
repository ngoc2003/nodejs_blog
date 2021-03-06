const Course = require("../models/Course");
// const 
class CourseController {
  // [GET] /search
  show(req, res, next) {
    Course.findOne( {slug: req.params.slug }).lean()
    .then ( course => res.render('courses/show', {course}) )
    .catch(next);
  }
  create(req, res, next) {
    res.render("courses/create")
  }
  store(req, res, next) {
    const data = req.body
    data.image = 'data:image/png;base64,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'
    data.videoID = 'LnTPJcUQdNU'
    data.slug = req.body.name
    const newCourse = new Course(data);
    newCourse.save()
      .then( () => res.redirect('/'))
      .catch(err => console.log(err))
  }
  
}

module.exports = new CourseController();
