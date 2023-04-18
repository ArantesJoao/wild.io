import express from "express";
import avistamentoController from "../controllers/sightingController";

const router = express.Router();

router.post("/", avistamentoController.createSighting);
router.get("/", avistamentoController.getAllSightingsLast30Days);
router.get("/all", avistamentoController.getAllSightings);
router.get("/:id", avistamentoController.getSightingById);
router.put("/:id", avistamentoController.updateSighting);
router.delete("/:id", avistamentoController.deleteSighting);
router.patch("/:id", avistamentoController.patchSighting);

export default router;
