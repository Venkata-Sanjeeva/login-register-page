const express = require("express")
const router = require("./routes/router.js")
const notFoundMiddleware = require("./middleware/notFound.js")
const cors = require("cors")
const path = require("path")
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api", router);

app.use(notFoundMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();