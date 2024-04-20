import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
} from "../Controllers/UserController.js";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
// router.put('/:id/follow', followUser)
// router.put('/:id/unfollow', UnFollowUser)router.get('/:id', getUser)
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)
// router.put('/:id/follow', followUser)
// router.put('/:id/unfollow', UnFollowUser)

export default router;
