
import { getConfiguration, addConfiguration } from "../use-cases";
import makeGetConfigurationController from "./get-configuration";
import makePostConfigurationController from "./post-configuration";


const getConfigurationController = makeGetConfigurationController({ getConfiguration });
const postConfigurationController = makePostConfigurationController({ addConfiguration });

const configurationService = Object.freeze({
    getConfigurationController,
    postConfigurationController
});


export default configurationService;

export {
    getConfigurationController,
    postConfigurationController

}