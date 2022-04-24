export default function buildMakeTransaction({ Id, md5, makeConfiguration }) {
    return function makeTransaction({
        transactionId = Id.makeId(),
        innitiatorId,
        beneficiaryId,
        amount,
        partyA,
        partyB,
        accountReference,
        message,
        description,
        checkoutRequestId,
        merchantRequestId,
        configuration,
        createdOn = new Date(),
        updatedOn = new Date(),
        isDeleted = false,
        dump,
        status,
        mpesaReceiptNumber,
    }) {

        if (!transactionId)
        {
            throw new Error('Transaction must have an id');
        }

        if (Id.isValid(trsansactionId) === false)
        {
            throw new Error('Transaction id must be a valid id');
        }

        if (!innitiatorId)
        {
            throw new Error('Transaction must have an innitiator');
        }

        if (!beneficiaryId)
        {
            throw new Error('Transaction must have a beneficiary');
        }

        if (!amount)
        {
            throw new Error('Transaction must have an amount');
        }

        if (typeof amount !== 'number' || amount <= 0)
        {
            throw new Error('Transaction amount must be a positive number');
        }

        if (!partyA)
        {
            throw new Error('Transaction must have a partyA');
        }

        if (typeof partyA !== 'string')
        {
            throw new Error('Transaction partyA must be a string');
        }

        if (!partyB)
        {
            throw new Error('Transaction must have a partyB');
        }

        if (typeof partyB !== 'string')
        {
            throw new Error(`Transaction partyB must be a string not ${typeof partyB}`);
        }

        if (!accountReference)
        {
            throw new Error('Transaction must have an accountReference');
        }

        if (!message)
        {
            throw new Error('Transaction must have a message');
        }

        if (typeof message !== 'string')
        {
            throw new Error(`Transaction message must be a string not ${typeof message}`);
        }

        if (!description)
        {
            throw new Error('Transaction must have a description');
        }

        if (typeof description !== 'string')
        {
            throw new Error(`Transaction description must be a string not ${typeof description}`);
        }

        if (!checkoutRequestId)
        {
            throw new Error('Transaction must have a checkoutRequestId');
        }

        if (typeof checkoutRequestId !== 'string')
        {
            throw new Error(`Transaction checkoutRequestId must be a string not ${typeof checkoutRequestId}`);
        }

        if (!merchantRequestId)
        {
            throw new Error('Transaction must have a merchantRequestId');
        }

        if (typeof merchantRequestId !== 'string')
        {

            throw new Error(`Transaction merchantRequestId must be a string not ${typeof merchantRequestId}`);
        }

        if (!configuration)
        {
            throw new Error('Transaction must have a configuration');
        }

        let validConfiguration = makeConfiguration(configuration);


        if (!validConfiguration)
        {
            throw new Error('Transaction must have a valid configuration');
        }

        if (!dump)
        {
            throw new Error('Transaction must have a dump');
        }

        if (typeof dump !== 'object')
        {
            throw new Error(`Transaction dump must be an object not ${typeof dump}`);
        }

        if (!status)
        {
            throw new Error('Transaction must have a status');
        }

        if (typeof status !== 'boolean')
        {
            throw new Error(`Transaction status must be a boolean not ${typeof status}`);
        }

        if (!mpesaReceiptNumber)
        {
            throw new Error('Transaction must have a mpesaReceiptNumber');
        }

        if (typeof mpesaReceiptNumber !== 'string')
        {
            throw new Error(`Transaction mpesaReceiptNumber must be a string not ${typeof mpesaReceiptNumber}`);
        }

        let hash;

        return Object.freeze({
            getTransactionId: () => transactionId,
            getInnitiatorId: () => innitiatorId,
            getBeneficiaryId: () => beneficiaryId,
            getAmount: () => amount,
            getPartyA: () => partyA,
            getPartyB: () => partyB,
            getAccountReference: () => accountReference,
            getMessage: () => message,
            getDescription: () => description,
            getCheckoutRequestId: () => checkoutRequestId,
            getMerchantRequestId: () => merchantRequestId,
            getConfiguration: () => validConfiguration,
            getConfigurationId: () => validConfiguration.getConfigurationId(),
            getDump: () => dump,
            getStatus: () => status,
            getMpesaReceiptNumber: () => mpesaReceiptNumber,
            getCreatedOn: () => createdOn,
            getUpdatedOn: () => updatedOn,
            getIsDeleted: () => isDeleted,

            markDeleted: () => {
                isDeleted = true;
                updatedOn = new Date();
            },

            markUndeleted: () => {
                isDeleted = false;
                updatedOn = new Date();
            },

            getHash: () => {
                if (!hash)
                {
                    hash = md5(`${transactionId}${innitiatorId}${beneficiaryId}${amount}${partyA}${partyB}${accountReference}${message}${description}${checkoutRequestId}${merchantRequestId}${configuration}${createdOn}${updatedOn}${isDeleted}${dump}${status}${mpesaReceiptNumber}`);
                }

                return hash;
            }


        });


    }
}