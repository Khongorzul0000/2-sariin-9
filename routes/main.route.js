const { Router } = require("express");
const { generate, redirect , getAll} = require("../controllers/main.controller");

const router = Router();

router.get("/:id", redirect).post("/", generate)
router.get("/getall", getAll)

module.exports = router;