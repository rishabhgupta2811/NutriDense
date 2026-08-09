require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected");

    const user = await User.create({
      name: "Admin",
      email: "admin@nutridense.com",
      password: "Admin123",
      role: "admin",
    });

    console.log(user);

    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });