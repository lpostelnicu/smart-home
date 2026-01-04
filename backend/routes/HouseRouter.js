import express from "express";
import HouseModel from "../models/house.js";

const router = express.Router();
 
router.post("/houses", async (req, res) => {
  const house = new HouseModel(req.body);
 
  try {
    await house.save();
    res.send(house);
  } catch (error) {
    res.status(500).send(error);
  }
});
 
export default router;