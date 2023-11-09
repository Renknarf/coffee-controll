//Refatorar

import { Request, Response } from "express";

import { planService } from "../services/planService";

const getAll = async (req: Request, res: Response) => {
  try {
    const plans = await planService.getAll();
    res.status(200).json(plans);
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plan = await planService.getById(id);
    if (!plan) {
      res.status(404).json({ message: "Plano não encontrado." });
    } else {
      res.status(200).json(plan);
    }
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const planData = req.body;

    const updatePlan = await planService.update(id, planData);

    if (!updatePlan) {
      res.status(404).json({ message: "Plano não encontrado." });
    } else {
      res.status(200).json(updatePlan);
    }
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const planData = req.body;
    const createdPlan = await planService.create(planData);
    res.status(201).json(createdPlan);
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const planDelete = await planService.deleteById(id);

    if (!planDelete) {
      res.status(404).json({ message: "Plano não encontrado." });
    } else {
      res.status(200).json({ message: "Plano excluído com sucesso." });
    }
  } catch (error: any) {
    res.status(400).json({ error: true, message: error?.message });
  }
};

export const PlanController = {
  getAll,
  getById,
  update,
  create,
  deleteById,
};
