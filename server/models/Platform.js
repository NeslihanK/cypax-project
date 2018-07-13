const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const platformSchema = new Schema({
  platformName: { type: String, required: true},
  link: { type: String, required: true },
  image: { type: String},
//   courses: [{type: Schema.Types.ObjectId, ref:'Course'}]
});


const Platform = mongoose.model("Platform", platformSchema);
module.exports = Platform;