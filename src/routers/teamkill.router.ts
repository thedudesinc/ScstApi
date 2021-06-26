import express, { Request, Response } from "express";
import * as TeamkillService from "../services/teamkill.service";
import { Teamkill } from "../models/teamkill";

export const teamkillRouter = express.Router();

// get teamkills
teamkillRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Teamkill[] = await TeamkillService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// get teamkill/:id
teamkillRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Teamkill = await TeamkillService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// create teamkill
teamkillRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Teamkill = req.body;

    const newTeamkill = await TeamkillService.create(item);

    res.status(201).json(newTeamkill);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// update teamkills/:id
teamkillRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const teamkillUpdate: Teamkill = req.body;

    const existingTeamkill: Teamkill = await TeamkillService.find(id);

    if (existingTeamkill) {
      const updatedTeamkill = await TeamkillService.update(id, teamkillUpdate);
      return res.status(200).json(updatedTeamkill);
    }

    const newTeamkill = await TeamkillService.create(teamkillUpdate);

    res.status(201).json(newTeamkill);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// delete teamkills/:id
teamkillRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await TeamkillService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
