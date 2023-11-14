import { Signature } from "../entities/Signature";
import { SignatureRepository } from "../repositories/SignatureRepository";
import * as yup from "yup";

const bodyValidation = yup.object().shape({
  active: yup.boolean().required(),
  registration_date: yup.date().required(),
  id_user: yup.string().required(),
  id_plan: yup.string().required(),
});

const getAll = async () => {
  try {
    return await SignatureRepository.getAll();
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao buscar todas as assinaturas.");
  }
};

const getById = async (id: string) => {
  try {
    return await SignatureRepository.getById(id);
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao buscar assinatura por id.");
  }
};

const update = async (id: string, signatureData: Partial<Signature>) => {
  try {
    await bodyValidation.validate(signatureData);
    return await SignatureRepository.update(id, signatureData);
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao atualizar assinatura.");
  }
};

const create = async ( req: Request, res: Response, signatureData: Partial<Signature>) => {
  try {
    const { id } = req.params;
    const plan = await planService.getById(id);
    if (!plan) {
      res.status(404).json({ message: "Erro ao criar assinatura - Plano é pré-requisito para assinatura." });
    } else {
      await bodyValidation.validate(signatureData);
      return await SignatureRepository.create(signatureData);
    }    
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao criar assinatura.");
  }
};

const deleteById = async (id: string) => {
  try {
    return await SignatureRepository.deleteById(id);
  } catch (error: any) {
    throw new Error(error?.message || "Erro ao deletar assinatura.");
  }
};

export const signatureService = {
  getAll,
  getById,
  update,
  create,
  deleteById,
};
