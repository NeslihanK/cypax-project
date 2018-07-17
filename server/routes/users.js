const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const config = require('../configs/index');
var mongoose = require('mongoose');

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'my-images',
  allowedFormats: ['jpg', 'png', 'gif'],
});

const parser = multer({ storage });

router.post('/:courseId',passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let userId=req.user.id;
  let courseId = req.params.courseId;
  User.findByIdAndUpdate(userId, {$addToSet: {_favorites: courseId}}, {new: true})
  .then(user => {
    return res.json(user)
  })
});

router.get('/:courseId',passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let userId=req.user.id;
  let courseId = req.params.courseId;
  User.findByIdAndUpdate(userId, {$pull: {_favorites: courseId}}, {new:true})
  .populate('_favorites')
  .then(user => {
    return res.json(user)
  })
});


router.post('/first-user/pictures', parser.single('picture'), (req, res, next) => {
  console.log('DEBUG req.file', req.file);
  User.findOneAndUpdate({}, { pictureUrl: req.file.url })
    .then(() => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
});

module.exports = router;