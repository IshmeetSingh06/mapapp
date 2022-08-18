import Reigon from "../models/reigon.js";

export const addReigon = async (req, res, next) => {
  const newReigon = new Reigon(req.body);
  try {
    const savedReigon = await newReigon.save();
    res.status(200).json(savedReigon);
  } catch (error) {
    next(error);
  }
};

export const getReigon = async (req, res, next) => {
  try {
    const reigon = await Reigon.findById(req.params.id);
    res.status(200).json(reigon);
  } catch (err) {
    next(err);
  }
};

export const getReiogns=async(req,res,next)=>{
  try{
    const reigons=await Reigon.find();
    res.status(200).json(reigons);
  }catch(err){
    next(err);
  }
}

export const deleteReigon = async (req, res, next) => {
  try {
    await Reigon.findByIdAndDelete(req.params.id);
    res.status(200).json("Reigon has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const updateReigon = async (req, res, next) => {
  try {
    const updatedReigon = await Reigon.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedReigon);
  } catch (err) {
    next(err);
  }
};
