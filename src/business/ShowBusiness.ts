import { ShowDatabase } from "../data/ShowDatabase";
import { CustomError } from "../error/BaseError";
import { InputShow, Show, WeekDayEnum } from "../model/Show";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const showDatabase = new ShowDatabase()
const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class ShowBusiness{

    createShow = async ({weekDay, startTime, endTime, bandId, idAutentication}:InputShow)=>{
        try{
        if(!startTime || !endTime || !bandId){
            throw new CustomError(400, "Invalid startTime or endTime or bandId")
        }
         
        // if(weekDay.toUpperCase() !== WeekDayEnum.SEXTA ){
        //     throw new CustomError(400, "Invalid week day 'sexta', 'sabado' or 'domingo' ");
        // }
        // if(weekDay.toUpperCase() !== WeekDayEnum.SABADO){
        //     throw new CustomError(400, "Invalid week day  'sabado' ");
        // }
        // if(weekDay.toUpperCase() !==  WeekDayEnum.DOMINGO){
        //     throw new CustomError(400, "Invalid week day  'domingo' ");
        // }

        const id = idGenerator.generate()

        const authenticatorId = authenticator.getData(idAutentication)

        if(authenticatorId.role !== UserRole.ADMIN){
            throw new CustomError(400, "Authentication invalid, not admin")
        }

        const insertShow ={
            id:id,
            weekDay:weekDay,
            startTime:startTime,
            endTime:endTime,
            bandId: bandId,
            idAutentication: authenticatorId
        }
        await showDatabase.create(insertShow)

        }catch(error:any){
            throw new CustomError(400, error.message);
        }
    }

    getAllShowDay=async (weekDay:string, authentication:string)=>{
        try{
            const dataAutentication = authenticator.getData(authentication);
        
            if(!dataAutentication){
                throw new CustomError(400, "Invalid authentication")
            }else{

                const bands = await showDatabase.getAllDay(weekDay)
            
                return bands
            }

        }catch(error:any){
            throw new CustomError(400, error.message);
        }
    }
}