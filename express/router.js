const express = require("express");
const multer = require("multer");
const router = express.Router();
const uploader = multer({
  dest: "upload/",
});

router.post("/api", (req, res) => {
  res.json({
    query: req.query,
    body: req.body,
  });
});

router.post("/file", uploader.single("file"), (req, res) => {
  console.log(req.body);
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

module.exports = router;
