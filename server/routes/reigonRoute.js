import express from "express";
import {
  addReigon,
  deleteReigon,
  getReigon,
  getReiogns,
  updateReigon,
} from "../controllers/reigonController.js";

const router = express.Router();

router.get("/",getReiogns);
router.post("/", addReigon);
router.get("/:id", getReigon);
router.put("/:id", updateReigon);
router.delete("/:id", deleteReigon);

export default router;