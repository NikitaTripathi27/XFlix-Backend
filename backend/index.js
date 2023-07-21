const app =require('./app')
const mongoose = require("mongoose");
const port = 8082;
const url = "mongodb://127.0.0.1:27017/xflix";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected successfully", url);
  })
  .catch((error) => {
    console.log("login failed", error);
  });

app.listen(port, () => {
  console.log("connected on port", port);
});
