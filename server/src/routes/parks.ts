import express from "express";
import avistamentoController from "../controllers/parkController";

const router = express.Router();

router.post("/", avistamentoController.createPark);
router.get("/", avistamentoController.getAllParks);
router.get("/:id", avistamentoController.getParkById);
router.put("/:id", avistamentoController.updatePark);
router.delete("/:id", avistamentoController.deletePark);
router.patch("/:id", avistamentoController.patchPark);

export default router;
