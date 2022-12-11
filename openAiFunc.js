const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(config);

const newImage = async (req, res) => {
  //get info prompt and size from req.body
  const { prompt, size } = req.body;
  if (prompt !== "" && size !== "") {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size,
    });
    let image_url = response.data.data[0].url;
    console.log(image_url);
    res.status(200).json({
      msg: "success",
      data: image_url,
    });
  } else {
    res.status(400).json({
      msg: "Null Data",
    });
  }
};
module.exports = { newImage };
