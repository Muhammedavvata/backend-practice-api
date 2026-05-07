const express = require("express");
const router = express.Router();
const statusController = require("../controllers/status.controller");

router.get("/ok", statusController.getOkDemo);
router.post("/created", statusController.createDemo);
router.post("/bad-request", statusController.getBadRequestDemo);
router.get("/unauthorized", statusController.getUnauthorizedDemo);
router.get("/forbidden", statusController.getForbiddenDemo);
router.get("/not-found", statusController.getNotFoundDemo);
router.get("/server-error", statusController.getServerErrorDemo);

module.exports = router;
