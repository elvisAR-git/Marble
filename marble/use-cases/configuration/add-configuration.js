import models from "../../models/index.js";

export default function makeAddConfiguration(configurationsDb) {
    return async function addConfiguration(configurationInfo) {

        console.log(configurationsDb);
        const configuration = models.makeConfiguration(configurationInfo);
        console.log(configuration.getHash())
        const exists = configurationsDb.findByHash({ hash: configuration.getHash() });
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