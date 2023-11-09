import { Plan } from "../entities/Plan";
import { PlanRepository } from "../repositories/PlanRepository";
import * as yup from "yup";

const bodyValidation = yup.object().shape({
  durationMonths: yup.number().required(),
  price_in_cents: yup.number().required(),
  description: yup.string().required(),
  name: yup.string().required(),
});

const getAll = async () => {
  try {
    return await PlanRepository.getAll();
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao buscar todos os planos.");
  }
};

const getById = async (id: string) => {
  try {
    return await PlanRepository.getById(id);
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao buscar plano por id.");
  }
};

const update = async (id: string, planData: Partial<Plan>) => {
  try {
    await bodyValidation.validate(planData);
    return await PlanRepository.update(id, planData);
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao atualizar plano.");
  }
};

const create = async (planData: Partial<Plan>) => {
  try {
    await bodyValidation.validate(planData);
    return await PlanRepository.create(planData);
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao criar plano.");
  }
};

const deleteById = async (id: string) => {
  try {
    return await PlanRepository.deleteById(id);
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao deletar plano.");
  }
};

export const planService = {
  getAll,
  getById,
  update,
  create,
  deleteById,
};
