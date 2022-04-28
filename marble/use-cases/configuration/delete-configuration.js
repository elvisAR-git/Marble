export default function makeDeleteConfiguration(configurationsDb) {
    return async function deleteConfiguration(configurationId) {
        if (!configurationId)
        {
            throw new Error("configurationId is required");
        }

        return configurationsDb.delete(configurationId);
    }
}