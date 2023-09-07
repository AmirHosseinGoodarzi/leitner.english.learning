import mongoose from "mongoose";
import { CategoryEnum } from "@/utils/enums";

const wordSchema = new mongoose.Schema({
  // User: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: [true, "User field is required"],
  // },
  user: {
    type: String,
    required: [true, "User field is required"],
  },
  front: {
    type: String,
    required: [true, "frontField is required"],
  },
  back: String,
  category: {
    type: Number,
    enum: [
      CategoryEnum.ONE,
      CategoryEnum.TWO,
      CategoryEnum.FOUR,
      CategoryEnum.EIGHT,
      CategoryEnum.FIFTEEN,
      CategoryEnum.COMPLETED,
    ],
    default: CategoryEnum.ONE,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  movedTo: {
    type: Date,
    default: () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    },
  },
});

const wordModel = mongoose.models.Word || mongoose.model("Word", wordSchema);

export default wordModel;
