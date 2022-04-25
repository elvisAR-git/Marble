export default function makeGetConfigurationsController({ getConfigurations }) {
    return async function getConfigurationsController({ httpRequest }) {
        const headers = {
            'Content-Type': 'application/json',
        }

        try
        {
            const configurations = await getConfigurations({});

            return {
                headers,
                statusCode: 200,
                body: configurations,
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