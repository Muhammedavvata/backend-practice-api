const express = require("express");
const router = express.Router();
const requestController = require("../controllers/request.controller");

// GET /api/request-demo/params/:id - Demo for req.params
router.get("/params/:id", requestController.getParamsDemo);

// GET /api/request-demo/query - Demo for req.query
router.get("/query", requestController.getQueryDemo);

// POST /api/request-demo/body - Demo for req.body
router.post("/body", requestController.createBodyDemo);

// GET /api/request-demo/headers - Demo for req.headers
router.get("/headers", requestController.getHeadersDemo);

module.exports = router;
