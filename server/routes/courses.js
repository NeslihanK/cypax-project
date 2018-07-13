const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const config = require('../configs/index');
const Course = require("../models/Course")




// const parser = multer({ storage });


// Route to get all course
router.get('/search/:courseSearch', (req, res, next) => {
    let courseCategory = req.params.courseSearch
  Course.find({category: courseCategory})
    .then(data => {
      res.json(data)
    })
    .catch (err => next(err))
});

router.get('/:courseId' , (req, res, next) => {
    let courseId = req.params.courseId;
    Course.findById(courseId)
    .then(data => {
      res.json(data)
    })
    .catch (err => next(err))
});




module.exports = router;