const express = require("express");
const route = require("./routes/client/index.route");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
//Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
