export default function makeListTransactions(transactionsDb) {
    return async function listTransactions() {
        const transactions = await transactionsDb.findAll();
        return transactions;
    }
}