import { ICommittee } from "./committee's.interface";
import CommitteeModel from "./committee's.model";

const createCommittee = async (committeeData: ICommittee) => {
  return await CommitteeModel.create(committeeData);
};

const getAllCommittees = async () => {
  return await CommitteeModel.find().sort({ createdAt: -1 });
};

const getCommitteeById = async (id: string) => {
  return await CommitteeModel.findById(id);
};

const updateCommittee = async (id: string, updateData: Partial<ICommittee>) => {
  return await CommitteeModel.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteCommittee = async (id: string) => {
  return await CommitteeModel.findByIdAndDelete(id);
};

export const CommitteeService = {
  createCommittee,
  getAllCommittees,
  getCommitteeById,
  updateCommittee,
  deleteCommittee,
};
