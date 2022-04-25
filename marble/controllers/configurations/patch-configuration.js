export default function makePatchConfigurationController({ updateConfiguration }) {
    return async function updateConfigurationController({ httpRequest }) {
        const headers = {
            'Content-Type': 'application/json',
        }

        try
        {
            const { configurationId } = httpRequest.params;
            const { body } = httpRequest;
            const configuration = await updateConfiguration({ configurationId, body });

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