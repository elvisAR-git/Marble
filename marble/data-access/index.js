import makeConfigurationsDb from "./configurations-db.js";
import makeTransactionsDb from "./transactions-db.js";
import mongodb from 'mongodb'
import dotenv from 'dotenv';
dotenv.config();


const MongoClient = mongodb.MongoClient

console.log(process.env.DM_MARBLE_DB_URL);

const url = process.env.DM_MARBLE_DB_URL;
const dbName = process.env.DM_MARBLE_DB_NAME;

var client;
client = new MongoClient(url, { useNewUrlParser: true });
export async function makeDb() {
    try
    {
        if (!client.isConnected)
        {
            await client.connect();
        }

        return client.db(dbName);
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