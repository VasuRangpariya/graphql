const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/graphql-test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};
