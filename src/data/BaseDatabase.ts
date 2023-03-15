import knex, { Knex } from "knex";
import dotenv from "dotenv"

dotenv.config()
export abstract class BaseDatabase {
    // DB_HOST = 35.226.146.116
    // DB_USER = "4416152-caroline-martins"
    // DB_PASSWORD = "YH1fV093Kl57DXfCnDFY"
    // DB_DATABASE_NAME = "jbl-4416152-caroline-martins"
    
    private static connection: Knex | null = null;

    protected getConnection(): Knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                  host: process.env.DB_HOST,
                  port: 3306,
                  user: process.env.DB_USER,
                  password: process.env.DB_PASSWORD,
                  database: process.env.DB_DATABASE_NAME,
                },
              });        
        }

        return BaseDatabase.connection;
    }

    public static async destroyConnection(): Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        }
    }
}