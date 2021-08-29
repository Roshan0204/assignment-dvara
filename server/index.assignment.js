const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// CORS Middleware Configuration
app.use(cors());

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api",require("./routes"))

const PORT = process.env.PORT || 5300;
app.listen(PORT, "localhost", () =>
  console.log(`Server Running on PORT ${PORT}`)
);
