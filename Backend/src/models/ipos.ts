import mongoose from "mongoose";
import { IPOS } from "../dtos/Ipos.dto";

const iposSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    issueManager: {
      type: String,
      required: true,
    },
    issuedUnit: {
      type: String,
      required: true,
    },
    closeDate: {
      type: Date,
      required: true,
    },
    openDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: ["general_public", "foreign_employment", "reserved"],
    },
    status: {
      type: String,
      enum: ["open", "closed", "upcoming"],
      default: "upcoming",
    },
  },
  { timestamps: true },
);
iposSchema.index({ closeDate: 1, openDate: 1 });
export const Ipos = mongoose.model("Ipos", iposSchema);
