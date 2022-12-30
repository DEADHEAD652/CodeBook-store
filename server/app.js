const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./database/db");
const validator = require("express-validator");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const port = 4000 || process.env.PORT;

//middlewares
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(validator());
//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
