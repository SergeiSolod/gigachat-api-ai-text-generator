const Router = require("express");
const router = new Router();
const controller = require("./controller");

router.post("/text", controller.getText);

module.exports = router;
