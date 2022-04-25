export default function makeDeleteConfigurationController({ deleteConfiguration }) {
    return async function deleteConfigurationController({ httpRequest }) {
        const headers = {
            'Content-Type': 'application/json',
        }

        try
        {
            const { configurationId } = httpRequest.params;
            const configuration = await deleteConfiguration({ configurationId });

            return {
                headers,
                statusCode: 200,
                body: configuration,
            }

        } catch (error)
        {
            console.log(error);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }

    }
}