import mongoose from "mongoose";
import dns from "dns";

export const connectDB = async () => {
  try {
    // Force Node's DNS resolver to use a reliable public DNS server
    // to avoid local DNS/Firewall issues causing `querySrv ECONNREFUSED`.
    dns.setServers(["8.8.8.8"]);
    await mongoose.connect(
      "mongodb+srv://studerAD15:root123@cluster0.duosg73.mongodb.net/?appName=Cluster0",
      {
        serverSelectionTimeoutMS: 5000,
      }
    );
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  }
};