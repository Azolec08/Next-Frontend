const mongoose = require("mongoose");

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add other Mongoose connection options if needed
    });
    console.log("Connected to mongoDb");
  } catch (error) {
    console.log("Failed to connect", error);
  }
};
