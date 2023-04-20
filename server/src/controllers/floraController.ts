import { Request, Response } from "express";
import Flora from "../models/flora";

export default {
  async createFlora(req: Request, res: Response) {
    try {
      const flora = new Flora(req.body);
      await flora.save();
      res.status(201).json(flora);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Erro desconhecido" });
      }
    }
  },

  async getAllFlora(req: Request, res: Response) {
    try {
      const flora_sightings = await Flora.find();
      res.json(flora_sightings);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async getAllFloraLast180Days(req: Request, res: Response) {
    try {
      const hundEightyDaysAgo = new Date(
        new Date().setDate(new Date().getDate() - 180)
      );

      const flora_sightings = await Flora.find({
        date: { $gte: hundEightyDaysAgo },
      });
      res.json(flora_sightings);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async getFloraById(req: Request, res: Response) {
    try {
      const flora = await Flora.findById(req.params.id);
      if (!flora) {
        res.status(404).json({ message: "Flora não encontrada" });
        return;
      }
      res.json(flora);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async updateFlora(req: Request, res: Response) {
    try {
      const flora = await Flora.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!flora) {
        res.status(404).json({ message: "Sighting não encontrado" });
        return;
      }
      res.json(flora);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async deleteFlora(req: Request, res: Response) {
    try {
      const flora = await Flora.findByIdAndDelete(req.params.id);
      if (!flora) {
        res.status(404).json({ message: "Sighting não encontrado" });
        return;
      }
      res.status(204).end();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async patchFlora(req: Request, res: Response) {
    try {
      const flora = await Flora.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!flora) {
        res.status(404).json({ message: "Sighting não encontrado" });
        return;
      }
      res.json(flora);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },
};
