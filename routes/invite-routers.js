import express from "express";
// import * as ctrl from "../controllers/v1";

const inviteRouters = express.Router();

inviteRouters.get("/", (req, res) => {
  res.send("invites list page");
});

export default inviteRouters;
