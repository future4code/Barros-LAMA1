import { BandDatabase } from "../data/BandDatabase";
import { CustomError } from "../error/BaseError";
import { InputBandDTO, InsertBandDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const bandDatabase = new BandDatabase();
const authenticator = new Authenticator();

export class BandBusiness {
    public createBand = async ({name, musicGenre,responsible, idAutorization}:InputBandDTO )=>{

        try{
            if(!name || !musicGenre || !responsible){
                throw new CustomError(400, '"name" or "musicGenre" or "responsible"');
            }
            if(!idAutorization){
                throw new CustomError(400, 'Not authorized');
            }

            const idUser = authenticator.getData(idAutorization)

            const id = idGenerator.generate()

            const insertBand: InsertBandDTO ={
                id: id,
                name:name,
                musicGenre:musicGenre,
                responsible: responsible,
                idAutorization: idUser.id
            }

            await bandDatabase.create(insertBand)

        }catch(error:any){
            throw new CustomError(400, error.message);
        }

    }
}