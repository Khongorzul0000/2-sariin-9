const { Router } = require("express");
const { postUrl, getUrl, getAll, deleteUrl } = require("../controllers/main.controller");

const router = Router();

router.route("/").get(getAll).post(postUrl);
router.route("/:id").get(getUrl).delete(deleteUrl)

module.exports = router;
