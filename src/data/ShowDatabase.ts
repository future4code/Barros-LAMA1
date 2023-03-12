import { Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase{
    private static TABLE_NAME = "shows";

    create = async({id, weekDay, startTime, endTime, bandId}:Show)=>{
        try{
           const result = await this.getConnection()
            .insert({
                id:id,
                week_day:weekDay,
                start_time:startTime,
                end_time:endTime,
                band_id:bandId
            }).into(ShowDatabase.TABLE_NAME)
console.log(result);

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }
}