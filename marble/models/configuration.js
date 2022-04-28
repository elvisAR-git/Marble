export default function buildMakeConfiguration({ Id, md5 }) {
    return function makeConfiguration({
        configurationId = Id.makeId(),
        initiatorName,
        description,
        passKey,
        shortCode,
        consumerKeyC2B,
        consumerSecretC2B,

        consumerKeyB2C,
        consumerSecretB2C,

        consumerKeyB2B,
        consumerSecretB2B,

        metaData,
        createdOn = new Date(),
        updatedOn = new Date(),
        isDeleted = false,
        status = true,
    }) {

        if (!configurationId)
        {
            throw new Error('Configuration must have an id');
        }

        if (Id.isValid(configurationId) === false)
        {
            throw new Error('Configuration id must be a valid id');
        }

        if (!initiatorName)
        {
            throw new Error('Configuration must have an initiator name');
        }

        if (typeof initiatorName !== 'string')
        {
            throw new Error(`Configuration innitiator must be a string not ${typeof initiatorName}`);
        }

        if (!description)
        {
            throw new Error('Configuration must have a description');
        }

        if (typeof description !== 'string')
        {
            throw new Error(`Configuration description must be a string not ${typeof description}`);
        }

        if (!passKey)
        {
            throw new Error('Configuration must have a passKey');
        }

        if (typeof passKey !== 'string')
        {
            throw new Error(`Configuration passKey must be a string not ${typeof passKey}`);
        }

        if (!shortCode)
        {
            throw new Error('Configuration must have a shortCode');
        }

        if (typeof shortCode !== 'number')
        {
            throw new Error(`Configuration shortCode must be a number not ${typeof shortCode}`);
        }

        if (!consumerKeyC2B)
        {
            throw new Error('Configuration must have a consumerKeyC2B');
        }

        if (typeof consumerKeyC2B !== 'string')
        {
            throw new Error(`Configuration consumerKeyC2B must be a string not ${typeof consumerKeyC2B}`);
        }

        if (!consumerSecretC2B)
        {
            throw new Error('Configuration must have a consumerSecretC2B');
        }

        if (typeof consumerSecretC2B !== 'string')
        {

            throw new Error(`Configuration consumerSecretC2B must be a string not ${typeof consumerSecretC2B}`);
        }

        if (!consumerKeyB2C)
        {

            throw new Error('Configuration must have a consumerKeyB2C');
        }

        if (typeof consumerKeyB2C !== 'string')
        {

            throw new Error(`Configuration consumerKeyB2C must be a string not ${typeof consumerKeyB2C}`);
        }

        if (!consumerSecretB2C)
        {

            throw new Error('Configuration must have a consumerSecretB2C');
        }

        if (typeof consumerSecretB2C !== 'string')
        {

            throw new Error(`Configuration consumerSecretB2C must be a string not ${typeof consumerSecretB2C}`);
        }

        if (!consumerKeyB2B)
        {

            throw new Error('Configuration must have a consumerKeyB2B');
        }

        if (typeof consumerKeyB2B !== 'string')
        {

            throw new Error(`Configuration consumerKeyB2B must be a string not ${typeof consumerKeyB2B}`);
        }

        if (!consumerSecretB2B)
        {

            throw new Error('Configuration must have a consumerSecretB2B');
        }

        if (typeof consumerSecretB2B !== 'string')
        {

            throw new Error(`Configuration consumerSecretB2B must be a string not ${typeof consumerSecretB2B}`);
        }

        if (!metaData)
        {

            throw new Error('Configuration must have a metaData');
        }

        if (typeof metaData !== 'object')
        {

            throw new Error(`Configuration metaData must be an object not ${typeof metaData}`);
        }

        let hash;


        return Object.freeze({

            getConfigurationId: () => configurationId,
            getInitiatorName: () => initiatorName,
            getDescription: () => description,
            getPassKey: () => passKey,
            getShortCode: () => shortCode,
            getConsumerKeyC2B: () => consumerKeyC2B,
            getConsumerSecretC2B: () => consumerSecretC2B,
            getConsumerKeyB2C: () => consumerKeyB2C,
            getConsumerSecretB2C: () => consumerSecretB2C,
            getConsumerKeyB2B: () => consumerKeyB2B,
            getConsumerSecretB2B: () => consumerSecretB2B,
            getMetaData: () => metaData,
            getCreatedOn: () => createdOn,
            getUpdatedOn: () => updatedOn,
            getIsDeleted: () => isDeleted,
            getStatus: () => status,
            getHash: () => {
                if (hash === undefined)
                {

                    hash = md5(`${configurationId}${initiatorName}${description}${passKey}${shortCode}${consumerKeyC2B}${consumerSecretC2B}${consumerKeyB2C}${consumerSecretB2C}${consumerKeyB2B}${consumerSecretB2B}${metaData}${createdOn}${updatedOn}${isDeleted}`);
                }
                return hash;
            },

            markDeleted: () => {
                isDeleted = true;
                updatedOn = new Date();
            },

            markUnDeleted: () => {
                isDeleted = false;
                updatedOn = new Date();
            }


        });

    }
}