const mongoose = require("mongoose");
//db connection
mongoose
  .set("strictQuery", false)
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});
