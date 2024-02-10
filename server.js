const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const videoRouter = require("./routes/video");
// const expressLayouts = require("express-ejs-layouts");
// const bodyParser = require("body-parser");
// const favicon = require("serve-favicon");
// const path = require("path");
// const ngrok = require("ngrok");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest objectt
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));
// (async function () {
//   const url = await ngrok.connect();
// })();
// app.use(express.static("public"));
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// app.use(expressLayouts);
// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
app.get("/", (req, res) => {
  res.render("index");
});

// app.use("/video/", videoRouter);
//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan
      .white
  );
});
