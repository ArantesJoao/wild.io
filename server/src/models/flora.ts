import mongoose from "mongoose";
import { ILocation } from "./parks";

interface FloraDocument extends mongoose.Document {
  identified_species: boolean;
  species?: string;
  description: string;
  location: ILocation;
  date: Date;
  photo?: string;
}

const floraSchema = new mongoose.Schema({
  identified_species: {
    type: Boolean,
    required: true,
  },
  species: {
    type: String,
    required: function (this: FloraDocument) {
      return this.identified_species;
    },
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
  date: {
    type: Date,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
});

const Flora = mongoose.model<FloraDocument>("Flora", floraSchema);

export default Flora;
