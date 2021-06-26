import prisma from "../prisma";
import { Teamkill } from "../models/teamkill";

export const findAll = async (): Promise<Teamkill[]> => {
  return await prisma.teamkills.findMany();
};

export const find = async (id: number): Promise<Teamkill> => {
  let response = await prisma.teamkills.findUnique({ where: { id: id } });

  if (!response) throw new Error("No match exists with that ID");

  return response;
};

export const create = async (teamkill: Teamkill): Promise<Teamkill> => {
  return await prisma.teamkills.create({ data: teamkill });
};

export const update = async (
  id: number,
  teamkill: Teamkill
): Promise<Teamkill> => {
  return await prisma.teamkills.update({
    where: { id: id },
    data: teamkill,
  });
};

export const remove = async (id: number): Promise<void> => {
  await prisma.teamkills.delete({ where: { id: id } });
};
