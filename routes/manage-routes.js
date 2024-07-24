import express from "express";
// import * as ctrl from "../controllers/v1";

const manageRouters = express.Router();

manageRouters.get("/", (req, res) => {
  res.send("get user profile");
});

export default manageRouters;
