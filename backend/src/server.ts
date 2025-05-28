import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running in port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  });
