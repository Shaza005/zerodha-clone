require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");

const app = express();


// MIDDLEWARES

app.use(express.json());

app.use(bodyParser.json());

app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


// AUTH ROUTES

app.use("/api/auth", authRoute);


// EXISTING ROUTES

app.get("/api/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/api/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/api/newOrder", async (req, res) => {
   console.log("REQ BODY:", req.body);
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send("order saved");
});


// SERVER

const PORT = process.env.PORT || 3002;

const uri = process.env.MONGO_URL;

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  try {
    await mongoose.connect(uri);

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(err);
  }
});