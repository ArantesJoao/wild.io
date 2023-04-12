import { Request, Response } from "express";
import Park from "../models/parks";

export default {
  async createPark(req: Request, res: Response) {
    try {
      const park = new Park(req.body);
      await park.save();
      res.status(201).json(park);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Erro desconhecido" });
      }
    }
  },

  async getAllParks(req: Request, res: Response) {
    try {
      const parks = await Park.find();
      res.json(parks);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async getParkById(req: Request, res: Response) {
    try {
      const park = await Park.findById(req.params.id);
      if (!park) {
        res.status(404).json({ message: "Park não encontrado" });
        return;
      }
      res.json(park);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async updatePark(req: Request, res: Response) {
    try {
      const park = await Park.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!park) {
        res.status(404).json({ message: "Park não encontrado" });
        return;
      }
      res.json(park);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },

  async deletePark(req: Request, res: Response) {
    try {
      const park = await Park.findByIdAndDelete(req.params.id);
      if (!park) {
        res.status(404).json({ message: "Park não encontrado" });
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

  async patchPark(req: Request, res: Response) {
    try {
      const park = await Park.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!park) {
        res.status(404).json({ message: "Park não encontrado" });
        return;
      }
      res.json(park);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro desconhecido" });
      }
    }
  },
};
