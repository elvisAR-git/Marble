export default function makeUpdateConfiguration({ configurationsDb }) {
    return async function updateConfiguration({ configurationId, updateInfo } = {}) {
        if (!configurationId)
        {
            throw new Error("configurationId is required");
        }

        if (!updateInfo)
        {
            throw new Error("updateInfo is required");
        }

        return configurationsDb.update(configurationId, updateInfo);
    }
}