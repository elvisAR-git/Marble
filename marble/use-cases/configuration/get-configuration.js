
export default function makeGetConfiguration(configurationsDb) {
    return async function getConfiguration({ configurationId } = {}) {

        if (!configurationId)
        {
            throw new Error('configurationId is required');
        }

        const configuration = await configurationsDb.findById(configurationId);

        if (configuration === null)
        {
            throw new Error(`configuration with id ${configurationId} not found`);
        }

        return configuration;

    }
}