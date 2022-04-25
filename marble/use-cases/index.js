import makeAddTransaction from "./transaction/add-transaction.js";
import makeAddConfiguration from "./configuration/add-configuration.js";
import makeGetConfiguration from "./configuration/get-configuration.js";
import makeListTransactions from "./transaction/list-transactions.js";
import makeListConfigurations from "./configuration/list-configurations.js";
import makeDeleteConfiguration from "./configuration/delete-configuration.js";
import makeUpdateConfiguration from "./configuration/update-configuration.js";

import { transactionsDb, configurationsDb } from "../data-access/index.js";

// dependancy injection

const addTransaction = makeAddTransaction({ transactionsDb });
const addConfiguration = makeAddConfiguration({ configurationsDb });
const getConfiguration = makeGetConfiguration({ configurationsDb });
const listTransactions = makeListTransactions({ transactionsDb });
const listConfigurations = makeListConfigurations({ configurationsDb });

const deleteConfiguration = makeDeleteConfiguration({ configurationsDb });
const updateConfiguration = makeUpdateConfiguration({ configurationsDb });



// export

const marbleService = Object.freeze({
    addTransaction,
    addConfiguration,
    getConfiguration,
    listTransactions,
    listConfigurations,
    deleteConfiguration,
    updateConfiguration
});


export default marbleService;

export {
    addTransaction,
    addConfiguration,
    getConfiguration,
    listTransactions,
    listConfigurations,
    deleteConfiguration,
    updateConfiguration
}