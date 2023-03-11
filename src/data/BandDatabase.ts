import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
    private static TABLE_NAME = "bands";

    public create = async ({id,name,musicGenre,responsible}:Band) => {
        try{

            await this.getConnection().insert({
                id: id,
                name: name,
                music_genre: musicGenre,
                responsible: responsible
            }).into(BandDatabase.TABLE_NAME)

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }

    }


}