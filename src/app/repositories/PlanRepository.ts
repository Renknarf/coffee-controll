import { myDataSource } from "../../database/data-source";
import { Plan } from "../entities/Plan";

const repository = myDataSource.getRepository(Plan);

const getAll = async () => {
  return await repository.find();
};

const getById = async (id: string) => {
  try {
    return await repository.findOne({ where: { id } });
  } catch (error) {
    throw new Error("Id inválido.");
  }
};

const create = async (planData: Partial<Plan>) => {
  return await repository.save(planData);
};

const update = async (id: string, planData: Partial<Plan>) => {
  try {
    const existingPlan = await repository.findOne({ where: { id } });

    if (existingPlan) {
      repository.merge(existingPlan, planData);
      return await repository.save(existingPlan);
    }

    return existingPlan;
  } catch (error) {
    throw new Error("Id inválido.");
  }
};

const deleteById = async (id: string) => {
  try {
    const existingPlan = await repository.findOne({ where: { id } });
    if (existingPlan) {
      await repository.remove(existingPlan);
      return true;
    }

    return existingPlan;
  } catch (error) {
    throw new Error("Id inválido.");
  }
};

export const PlanRepository = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
