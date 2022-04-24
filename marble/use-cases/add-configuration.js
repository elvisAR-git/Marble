import models from "../models";

export default function makeAddConfiguration({ configurationsDb }) {
    return async function addConfiguration(configurationInfo) {
        const configuration = models.makeConfiguration(configurationInfo);
        const exists = configurationsDb.findByHash(configuration.getHash());
        if (exists)
        {
            return exists;
        }
        return configurationsDb.insert({
            configurationId: configuration.getId(),
            innitiatorName: configuration.getInnitiatorName(),
            description: configuration.getDescription(),
            consumerKeyB2C: configuration.getConsumerKeyB2C(),
            consumerSecretB2C: configuration.getConsumerSecretB2C(),
            consumerKeyB2B: configuration.getConsumerKeyB2B(),
            consumerSecretB2B: configuration.getConsumerSecretB2B(),
            metaData: configuration.getMetaData(),
            hash: configuration.getHash(),
            createdOn: configuration.getCreatedOn(),
            updatedOn: configuration.getUpdatedOn(),
            isDeleted: configuration.getIsDeleted(),
            status: configuration.getStatus(),
        });
    }
}