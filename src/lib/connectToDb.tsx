const { default: mongoose } = require("mongoose");

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect to db");
  } catch (error) {
    console.log("Failed to Connect to mongodb", error);
  }
};
