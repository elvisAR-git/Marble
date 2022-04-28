import makeConfigurationsDb from "./configurations-db.js";
import makeTransactionsDb from "./transactions-db.js";
import dotenv from 'dotenv';
import { MongoClient } from "mongodb";
dotenv.config();



console.log(process.env.DM_MARBLE_DB_URL);

const url = process.env.DM_MARBLE_DB_URL;
const dbName = process.env.DM_MARBLE_DB_NAME;


const client = new MongoClient(url, { useNewUrlParser: true });
export async function makeDb() {
    try
    {
        console.log("Connecting to MongoDB...");
        await client.connect();
        return client.db(dbName)

    } catch (error)
    {

        console.log("Error in makeDb", error);

    }

}

const configurationsDb = makeConfigurationsDb({ makeDb });
const transactionsDb = makeTransactionsDb({ makeDb });

const databaseService = {
    configurationsDb,
    transactionsDb
}


export default Object.freeze(databaseService);
export {
    configurationsDb,
    transactionsDb
}