const express = require("express");
const router = require("./router");
const app = express();

app.use((req, res, next) => {
  // res.setHeader // 单独设置一个
  // res.header == res.set
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  next();
});

app.use(express.static(__dirname + "/static"));

// application/x-ww-form-urlencoded
app.use(express.urlencoded());
// application/json
app.use(express.json());
// application/octet-stream
// express.raw()
// text/plain
app.use(express.text());
//

app.use("/", router);

app.listen(8000);
