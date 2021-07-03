import prisma from "../prisma";
import { Player } from "../models/player";

export const findAll = async (): Promise<Player[]> => {
  return await prisma.players.findMany();
};

export const find = async (id: number): Promise<Player> => {
  let response = await prisma.players.findUnique({ where: { id: id } });

  if (!response) throw new Error("No player exists with that ID");

  return response;
};

export const create = async (player: Player): Promise<Player> => {
  const existing = await prisma.players.findMany({
    where: {
      gamePlayerId: {
        equals: player.gamePlayerId,
      },
    },
  });

  let response: Player;

  if (existing && existing.length > 0) {
    response = await update(existing[0].id, player);
  } else {
    response = await prisma.players.create({ data: player });
  }

  return response;
};

export const update = async (id: number, player: Player): Promise<Player> => {
  return await prisma.players.update({
    where: { id: id },
    data: player,
  });
};

export const remove = async (id: number): Promise<void> => {
  await prisma.players.delete({ where: { id: id } });
};
