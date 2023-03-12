import express from "express"
import { BandController } from "../controller/BandController"

export const bandRouter = express.Router()

const bandController = new BandController()

bandRouter.post("/create", bandController.create)

bandRouter.get("/get", bandController.getAllIdBand)