export default function makePostConfigurationController({ addConfiguration }) {
    return async function postConfigurationController({ httpRequest }) {
        try
        {

            const { ...configurationInfo } = httpRequest.body;

            const config = await addConfiguration({ configurationInfo });

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: {
                    configuration: config
                }
            }


        } catch (error)
        {
            console.log(error);

            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    error: error.message
                }
            }
        }
    }
}