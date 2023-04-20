import express from "express";
import floraController from "../controllers/floraController";

const router = express.Router();

router.post("/", floraController.createFlora);
router.get("/", floraController.getAllFloraLast180Days);
router.get("/all", floraController.getAllFlora);
router.get("/:id", floraController.getFloraById);
router.put("/:id", floraController.updateFlora);
router.delete("/:id", floraController.deleteFlora);
router.patch("/:id", floraController.patchFlora);

export default router;
