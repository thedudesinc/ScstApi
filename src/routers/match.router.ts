import express, { Request, Response } from "express";
import * as MatchService from "../services/match.service";
import { Match } from "../models/match";

export const matchRouter = express.Router();

// get matches
matchRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Match[] = await MatchService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// get match/:id
matchRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Match = await MatchService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// create match
matchRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Match = req.body;

    const newMatch = await MatchService.create(item);

    res.status(201).json(newMatch);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// update matches/:id
matchRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const matchUpdate: Match = req.body;

    const existingMatch: Match = await MatchService.find(id);

    if (existingMatch) {
      const updatedMatch = await MatchService.update(id, matchUpdate);
      return res.status(200).json(updatedMatch);
    }

    const newMatch = await MatchService.create(matchUpdate);

    res.status(201).json(newMatch);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// delete matches/:id
matchRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await MatchService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
