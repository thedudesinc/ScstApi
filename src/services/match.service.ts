import prisma from "../prisma";
import { Match } from "../models/match";

export const findAll = async (): Promise<Match[]> => {
  return await prisma.matches.findMany();
};

export const find = async (id: number): Promise<Match> => {
  let response = await prisma.matches.findUnique({ where: { id: id } });

  if (!response) throw new Error("No match exists with that ID");

  return response;
};

export const create = async (match: Match): Promise<Match> => {
  return await prisma.matches.create({ data: match });
};

export const update = async (id: number, match: Match): Promise<Match> => {
  return await prisma.matches.update({
    where: { id: id },
    data: match,
  });
};

export const remove = async (id: number): Promise<void> => {
  await prisma.matches.delete({ where: { id: id } });
};
