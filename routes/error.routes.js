const express = require("express");
const router = express.Router();
const errorController = require("../controllers/error.controller");

router.get("/safe", errorController.getSafeDemo);
router.post("/validation", errorController.getValidationErrorDemo);
router.get("/not-found", errorController.getNotFoundErrorDemo);
router.get("/server-error", errorController.getServerErrorDemo);
router.get("/async-error", errorController.getAsyncErrorDemo);

module.exports = router;
