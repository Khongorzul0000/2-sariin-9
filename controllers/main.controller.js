const Redirect = require("../models/redirect.model");

const generate = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  try {
    const redirect = await Redirect.create({ url });
    res.status(201).json(redirect);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error, try again");
  }
};

const redirect = async (req, res) => {
  const { shortUrl } = req.body;

  try {
    // const redirect = await Redirect.findById(id);
    const redirect = await Redirect.findOne({shortUrl}).lean()

    if (!redirect) {
      return res.status(404).send("short url chimn bolku bnoo");
    }

    const { url } = redirect;

    res.send(url);
  } catch (error) {
    res.status(500).send("Error, try again(error)");
  }
};
const getAll = async (req, res)=>{
try {
  console.log(req)
  const result = await Redirect.find({})
  res.send({
    result
  })
} catch (error) {
  console.log(error)
}
}

module.exports = { generate, redirect, getAll };