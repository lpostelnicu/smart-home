import mongoose from "mongoose";
 
const HouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
    required: true,
    min: 1,
    max: 100
  },
  heatingSystem: {
    inBuilding: {
      type: Boolean,
      required: true
    },
    productModel: {
      type: String
    },
    type: {
      type: String,
      enum: ["gas", "oil", "electric", "pump"],
      required: function() {
        return this.inBuilding === true;
      }
    },
    remoteAccess: {
      type: Boolean,
      required: function() {
        return this.inBuilding === true;
      }
    }
  }
});
 
const HouseModel = mongoose.model("House", HouseSchema);

export default HouseModel;