import makeAddTransaction from "./add-transaction";
import makeAddConfiguration from "./add-configuration";
import makeGetConfiguration from "./get-configuration";
import makeListTransactions from "./list-transactions";
import makeListConfigurations from "./list-configurations";

// dependancy injection

const addTransaction = makeAddTransaction({ transactionsDB });
const addConfiguration = makeAddConfiguration({ configurationsDb });
const getConfiguration = makeGetConfiguration({ configurationsDb });
const listTransactions = makeListTransactions({ transactionsDB });
const listConfigurations = makeListConfigurations({ configurationsDb });



// export

const marbleService = {
    addTransaction,
    addConfiguration,
    getConfiguration,
    listTransactions,
    listConfigurations
}


export default marbleService;