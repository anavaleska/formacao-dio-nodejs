import { Router } from "express";
import {
  getAllPlayers,
  getPlayerById,
} from "../controllers/players.controller";

export const router = Router();

router.get("/players", getAllPlayers);
router.get("/players/:id", getPlayerById);
