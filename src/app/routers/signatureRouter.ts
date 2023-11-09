import express from "express";
import { SignatureController } from "../controllers/SignatureController";

export const signatureRouter = express.Router();

signatureRouter.get("/", SignatureController.getAll);

signatureRouter.get("/:id", SignatureController.getById);

signatureRouter.post("/", SignatureController.create);

signatureRouter.put("/:id", SignatureController.update);

signatureRouter.delete("/:id", SignatureController.deleteById);
