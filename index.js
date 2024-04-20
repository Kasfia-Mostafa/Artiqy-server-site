import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
// import UserRoute from './Routers/UserRoute.js'

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ijwgr8d.mongodb.net/Artiqy?retryWrites=true&w=majority&appName=Cluster0`;
(async () => {
  try {
    console.log("connecting...");
    await mongoose.connect(dbUrl);
    console.log("connected DB");
  } catch (err) {
    console.log("connection failed");
    console.log(err);
  }
})();

// app.get("/", async (req, res) => {
//   console.log(req);
//   res.send("Register Page");
// });

// usage of routes
app.use("/auth", AuthRoute);
// app.use('/user', UserRoute)

app.listen(port, () => console.log(`Artiqy working on ${port}`));
