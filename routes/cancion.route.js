import { controllerSong } from "../controllers/cancion.controller.js"
import { Router } from "express"

const router = Router()

router.get("/canciones", controllerSong.getAllSongs)
router.post("/cancion", controllerSong.createSong)
router.delete("/cancion/:id", controllerSong.removeSong)
router.put("/cancion/:id", controllerSong.updateSong)

export default router