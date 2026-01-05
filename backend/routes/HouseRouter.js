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

router.get("/houses", async (req, res) => {
  try {
   const houses = await HouseModel.find({});
    res.send(houses);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get("/houses/:id", async (req, res) => {
  try {
    const house = await HouseModel.findOne({ _id: req.params.id }); // to check later in client app
    res.send(house);
  } catch (error) {
    res.status(500).send({ error });
  }
});
 
export default router;