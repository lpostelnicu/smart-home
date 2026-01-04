import mongoose from "mongoose";
 
const HouseSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  address: {
    street: {
      type: String
    },
    number: {
      type: String
    },
    postalCode: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    }
  },
  rooms: {
    type: Number,
    min: 1,
    max: 100
  },
  heatingSystem: {
    inBuilding: {
      type: Boolean
    },
    productModel: {
      type: String
    },
    functionType: {
      type: String,
      enum: ["gas", "oil", "wood", "electric", "pump"]
    },
    remoteAccess: {
      type: Boolean
    }
  }
});
 
const HouseModel = mongoose.model("House", HouseSchema);

export default HouseModel;