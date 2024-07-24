import express from "express";
// import * as ctrl from "../controllers/v1";

const userRouters = express.Router();

userRouters.get("/", (req, res) => {
  res.send("get user profile");
});

export default userRouters;
