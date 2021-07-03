import express, { Request, Response } from "express";
import * as PlayerService from "../services/player.service";
import { Player } from "../models/player";

export const playerRouter = express.Router();

// get playeres
playerRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Player[] = await PlayerService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// get player/:id
playerRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Player = await PlayerService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// create player
playerRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Player = req.body;

    const newPlayer = await PlayerService.create(item);

    res.status(201).json(newPlayer);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// update playeres/:id
playerRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const playerUpdate: Player = req.body;

    const existingPlayer: Player = await PlayerService.find(id);

    if (existingPlayer) {
      const updatedPlayer = await PlayerService.update(id, playerUpdate);
      return res.status(200).json(updatedPlayer);
    }

    const newPlayer = await PlayerService.create(playerUpdate);

    res.status(201).json(newPlayer);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// delete playeres/:id
playerRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await PlayerService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
