import makeConfigurationsDb from "./configurations-db";
import makeTransactionsDb from "./transactions-db";
import mongodb from 'mongodb'


const MongoClient = mongodb.MongoClient
const url = process.env.DM_MARBLE_DB_URL;
const dbName = process.env.DM_MARBLE_DB_NAME;

const client = new MongoClient(url, { useNewUrlParser: true });


export async function makeDb() {
    if (!client.isConnected())
    {
        await client.connect();
    }

    return client.db(dbName);

}

const configurationsDb = makeConfigurationsDb({ makeDb });
const transactionsDb = makeTransactionsDb({ makeDb });

const databaseService = {
    configurationsDb,
    transactionsDb
}


export default Object.freeze(databaseService);