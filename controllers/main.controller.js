const shortid = require("shortid");
const Redirect = require("../models/redirect.model");

const postUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  try {
    const redirect = await Redirect.create({
      url: url,
      shortUrl: shortid(),
    });
    res.status(201).json(redirect);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error, try again");
  }
};

const getUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const redirect = await Redirect.findOne({ shortUrl: id });
    console.log(redirect);
    if (!redirect) {
      return res.status(404).send("short url chimn bolku bnoo");
    }
    const { url } = redirect;

    // res.send({ redirect });
    res.redirect(url)
  } catch (error) {
    res.status(500).send("Error, try again(error)");
  }
};
const getAll = async (req, res) => {
  try {
    const result = await Redirect.find({});
    res.send({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postUrl, getUrl, getAll };
