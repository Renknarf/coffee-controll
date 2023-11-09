import express from "express";
import { PlanController } from "../controllers/PlanController";

export const planRouter = express.Router();

planRouter.get("/", PlanController.getAll);

planRouter.get("/:id", PlanController.getById);

planRouter.post("/", PlanController.create);

planRouter.put("/:id", PlanController.update);

planRouter.delete("/:id", PlanController.deleteById);
