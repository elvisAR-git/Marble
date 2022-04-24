import models from "../models";

export default function makeAddTransaction({ transactionsDB }) {

    return async function addTransaction(transactionInfo) {
        const transaction = models.makeTransaction(transactionInfo);
        const exists = transactionsDB.findByHash(transaction.getHash());
        if (exists)
        {
            return exists;
        }

        return transactionsDB.insert({
            transactionId: transaction.getTransactionId(),
            innitiatorId: transaction.getInnitiatorId(),
            beneficiaryId: transaction.getBeneficiaryId(),
            amount: transaction.getAmount(),
            partyA: transaction.getPartyA(),
            partyB: transaction.getPartyB(),
            accountReference: transaction.getAccountReference(),
            message: transaction.getMessage(),
            description: transaction.getDescription(),
            checkoutRequestId: transaction.getCheckoutRequestId(),
            merchantRequestId: transaction.getMerchantRequestId(),
            configurationId: transaction.getConfigurationId(),
            status: transaction.getStatus(),
            isDeleted: transaction.getIsDeleted(),
            createdOn: transaction.getCreatedOn(),
            updatedOn: transaction.getUpdatedOn(),
            mpesaReceiptNumber: transaction.getMpesaReceiptNumber(),
            dump: transaction.getDump(),
            hash: transaction.getHash()
        });
    }

}