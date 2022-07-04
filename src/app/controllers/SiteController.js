const Course = require("../models/Course");
class SiteController {
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
  // [GET] /home
  home(req, res, next) {
    Course.find({}).lean() // trả về old plain javascript object
      .then((courses) =>
      {
        // courses = courses.map(course => course.toObject())
        res.render("home", {
          courses
        })
        
      }
      )
      .catch(next);
  }
}

module.exports = new SiteController();
