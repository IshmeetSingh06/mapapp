import mongoose from "mongoose";

const ReigonSchema = new mongoose.Schema({

  reigon: {
    type: String,
    required: true,
  },

  data: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Reigon", ReigonSchema);
