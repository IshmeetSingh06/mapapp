import mongoose from "mongoose";

const ReigonSchema = new mongoose.Schema({

  lat:{
    type: Number,
    required: true
  },
  long:{
    type:Number,
    required: true,
  },
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
