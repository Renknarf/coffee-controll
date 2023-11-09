import { myDataSource } from "../../database/data-source";
import { Signature } from "../entities/Signature";

const repository = myDataSource.getRepository(Signature);

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

const create = async (signatureData: Partial<Signature>) => {
  return await repository.save(signatureData);
};

const update = async (id: string, signatureData: Partial<Signature>) => {
  try {
    const existingSignature = await repository.findOne({ where: { id } });

    if (existingSignature) {
      repository.merge(existingSignature, signatureData);
      return await repository.save(existingSignature);
    }

    return existingSignature;
  } catch (error) {
    throw new Error("Id inválido.");
  }
};

const deleteById = async (id: string) => {
  try {
    const existingSignature = await repository.findOne({ where: { id } });
    if (existingSignature) {
      await repository.remove(existingSignature);
      return true;
    }

    return existingSignature;
  } catch (error) {
    throw new Error("Id inválido.");
  }
};

export const SignatureRepository = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
