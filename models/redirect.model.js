const { Schema, model } = require("mongoose");
const shortid = require("shortid");

const redirectSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl:{
    type:String,
    required:true,
    default:()=>shortid.generate()
  }
});

const Redirect = model("Redirect", redirectSchema);

module.exports = Redirect;