import mongoose from "mongoose";
import { ILocation } from "./parks";
import { User } from "./flora";

interface SightingDocument extends mongoose.Document {
  identified_species: boolean;
  species?: string;
  description: string;
  location: ILocation;
  date: Date;
  photo?: string;
  User: User;
}

const sightingSchema = new mongoose.Schema({
  identified_species: {
    type: Boolean,
    required: true,
  },
  species: {
    type: String,
    required: function (this: SightingDocument) {
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
  user: {
    name: String,
    email: String,
    google_id: String,
  },
});

const Sighting = mongoose.model<SightingDocument>("Sighting", sightingSchema);

export default Sighting;
