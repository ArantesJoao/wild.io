import mongoose from "mongoose";

export interface ILocation {
  latitude: Number;
  longitude: Number;
}

interface ParkDocument extends mongoose.Document {
  name: string;
  description: string;
  location: ILocation;
}

const parkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
});

const Park = mongoose.model<ParkDocument>("Park", parkSchema);

export default Park;
