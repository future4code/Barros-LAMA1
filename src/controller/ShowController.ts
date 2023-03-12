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

    getAllShowDay=async(req:Request, res:Response) => {

        try{    

            const authentication = req.headers.authorization as string

            const weekDay = req.body.weekDay

            const bands = await showBusinnes.getAllShowDay(weekDay,authentication)

            res.status(200).send(bands)

        }catch(error: any){
            res.status(400).send({ error: error.message });
        }

    }
}