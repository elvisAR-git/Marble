
export default function makeGetTransaction(transactionsDb) {
    return async function getTransaction({ transactionId } = {}) {

        if (!transactionId)
        {
            throw new Error('transactionId is required');
        }

        const transaction = await transactionsDb.findById(transactionId);

        if (transaction === null)
        {
            throw new Error(`transaction with id ${transactionId} not found`);
        }

        return transaction;

    }
}