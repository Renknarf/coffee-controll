import { Request, Response } from "express";

import { signatureService } from "../services/signatureService";

const getAll = async (req: Request, res: Response) => {
  try {
    const signatures = await signatureService.getAll();
    res.status(200).json(signatures);
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};
// Buscar todas as assinaturas de um plano

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const signature = await signatureService.getById(id);
    if (!signature) {
      res.status(404).json({ message: "Assinatura não encontrado." });
    } else {
      res.status(200).json(signature);
    }
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const signatureData = req.body;

    const updateSignature = await signatureService.update(id, signatureData);

    if (!updateSignature) {
      res.status(404).json({ message: "Assinatura não encontrado." });
    } else {
      res.status(200).json(updateSignature);
    }
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const signatureData = req.body;
    const createdSignature = await signatureService.create(signatureData);
    res.status(201).json(createdSignature);
  } catch (error: any) {
    res
      .status(400)
      .json({
        error: true,
        message: error?.message || "Erro ao criar assinatura.",
      });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteSignature = await signatureService.deleteById(id);

    if (!deleteSignature) {
      res.status(404).json({ message: "Assinatura não encontrado." });
    } else {
      res.status(200).json({ message: "Assinatura excluído com sucesso." });
    }
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

const cancelSubscription = async () => {};

export const SignatureController = {
  getAll,
  getById,
  update,
  create,
  deleteById,
  cancelSubscription,
};
