import express from "express";
import {
  getSingleUser,
  getAllUser,
  updateUser,
  deleteUser,
} from "../Controllers/userController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, getSingleUser);
router.get("/", getAllUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
