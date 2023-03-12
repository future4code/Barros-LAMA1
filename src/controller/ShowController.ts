import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness"
import { InputShow } from "../model/Show"

const showBusinnes = new ShowBusiness();

export class ShowController {
    createShow = async (req: Request, res: Response) => {
        try {
            const idAutorization = req.headers.authorization as string;
            const { weekDay, startTime, endTime, bandId } = req.body

            const newShow: InputShow = {
                weekDay,
                startTime,
                endTime,
                bandId,
                idAutentication: idAutorization
            }
            await showBusinnes.createShow(newShow)
            res.status(201).send({ message: "Show created successfully!" })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
}