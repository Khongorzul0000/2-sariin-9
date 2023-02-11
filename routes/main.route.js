const { Router } = require("express");
const { postUrl, getUrl, getAll } = require("../controllers/main.controller");

const router = Router();

router.route("/").get(getAll).post(postUrl);
router.route("/:id").get(getUrl);

module.exports = router;
