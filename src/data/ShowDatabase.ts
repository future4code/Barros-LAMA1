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

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    getAllDay = async (weekDay:string)=>{
        try{

        const result = await this.getConnection()
        .select("name","music_genre")
        .from("bands as b")
        .join("shows as s","s.band_id", "b.id")
        .where({week_day: weekDay})
        .orderBy("s.start_time", "asc")

        console.log(result);
        
        return (result)

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }
}