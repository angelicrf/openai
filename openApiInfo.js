const express = require("express");
const router = express.Router();
const { openai } = require("openai");
const { newImage } = require("./openAiFunc");

const createImageFunc = (req, res) => {
  try {
    let getImage = newImage(req, res);
  } catch (error) {
    res.status(400).json({
      msg: `Not Success ${error}`,
    });
  }
};
/* router.get("/", (req, res) => {
  res.status(200).json({
    data: "success Main Page",
  });
}); */
router.post("/createImg", createImageFunc);

module.exports = router;
