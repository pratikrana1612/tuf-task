require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./db/connect.js");
const userRoutes = require("./routes/flashCard.routes.js");
const app = express();

app.use(cors());

// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());
app.use(express.static("public"));

// Mount the userRoutes on the "/api/users" path
app.use("/api/learn", userRoutes);

// Connect to the MongoDB database and start the server
sequelize
  // .sync({ force: true })
  // .sync({ alter: true })
  .sync()
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

    console.log("All Tables are created based on models");
    // console.log(result);
  })
  .catch((err) => {
    console.log("mysql connection FAILED ", err);
    process.exit(1);
  });
