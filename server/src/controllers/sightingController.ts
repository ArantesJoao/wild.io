import { Request, Response } from "express"
import Sighting from "../models/sightings"

export default {
  async createSighting(req: Request, res: Response) {
    try {
      const sighting = new Sighting(req.body)
      await sighting.save()
      res.status(201).json(sighting)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      } else {
        res.status(400).json({ message: "Erro desconhecido" })
      }
    }
  },

  async getAllSightings(req: Request, res: Response) {
    try {
      const sightings = await Sighting.find()
      res.json(sightings)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        res.status(500).json({ message: "Erro desconhecido" })
      }
    }
  },

  async getAllSightingsLast30Days(req: Request, res: Response) {
    try {
      const thirtyDaysAgo = new Date(
        new Date().setDate(new Date().getDate() - 30)
      )

      const sightings = await Sighting.find({ date: { $gte: thirtyDaysAgo } })
      res.json(sightings)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        res.status(500).json({ message: "Erro desconhecido" })
      }
    }
  },

  async getSightingById(req: Request, res: Response) {
    try {
      const sighting = await Sighting.findById(req.params.id)
      if (!sighting) {
        res.status(404).json({ message: "Sighting não encontrado" })
        return
      }
      res.json(sighting)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        res.status(500).json({ message: "Erro desconhecido" })
      }
    }
  },

  async updateSighting(req: Request, res: Response) {
    try {
      const sighting = await Sighting.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      if (!sighting) {
        res.status(404).json({ message: "Sighting não encontrado" })
        return
      }
      res.json(sighting)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        res.status(500).json({ message: "Erro desconhecido" })
      }
    }
  },

  async deleteSighting(req: Request, res: Response) {
    try {
      const sighting = await Sighting.findByIdAndDelete(req.params.id)
      if (!sighting) {
        res.status(404).json({ message: "Sighting não encontrado" })
        return
      }
      res.status(204).end()
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        res.status(500).json({ message: "Erro desconhecido" })
      }
    }
  },

  async patchSighting(req: Request, res: Response) {
    try {
      const sighting = await Sighting.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      if (!sighting) {
        res.status(404).json({ message: "Sighting não encontrado" })
        return
      }
      res.json(sighting)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        res.status(500).json({ message: "Erro desconhecido" })
      }
    }
  },
}
