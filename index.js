const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || "5000";
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//app.use("/", require("./openApiInfo"));
app.use("/thisOpenAi", require("./openApiInfo"));

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});
