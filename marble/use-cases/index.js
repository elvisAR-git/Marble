import makeAddTransaction from "./add-transaction";
import makeAddConfiguration from "./add-configuration";


// dependancy injection

const addTransaction = makeAddTransaction({ transactionsDB });
const addConfiguration = makeAddConfiguration({ configurationsDb });



// export

const marbleService = {
    addTransaction,
    addConfiguration,
}


export default marbleService;