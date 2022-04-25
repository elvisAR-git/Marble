export default function makeGetConfigurationController({ getConfiguration }) {
    return async function getConfigurationController({ httpRequest } = {}) {
        const headers = {
            'Content-Type': 'application/json',
        }

        try
        {
            const configuration = await getConfiguration({ configurationId: httpRequest.query.configurationId });

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