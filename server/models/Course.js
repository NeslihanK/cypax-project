const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const courseSchema = new Schema({
  courseName: { type: String, required: true},
  image: { type: String},
  category: { type: String, enum: ['JS', 'CSS', 'Python', 'Java', 'PHP', 'C++']},
  _platform: { type: Schema.Types.ObjectId, ref: 'Platform'},
  link: { type: String, required: true },
  price: { type: Number},
  rating: { type: Array},
});


const Course = mongoose.model("Course", courseSchema);
module.exports = Course;