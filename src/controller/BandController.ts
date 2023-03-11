import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";

const bandBusiness = new BandBusiness();

export class BandController {
    create = async (req: Request, res: Response) => {
        try {
            const idAutorization = req.headers.authorization as string;
            const { name, musicGenre, responsible } = req.body

            const insertBand = {
                name: name,
                musicGenre: musicGenre,
                responsible: responsible,
                idAutorization: idAutorization
            }
            await bandBusiness.createBand(insertBand)

            res.status(201).send({ message: "Band created successfully!" })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}