
import { getConfiguration, addConfiguration, listConfigurations, deleteConfiguration, updateConfiguration } from "../use-cases/index.js";
import makeDeleteConfigurationController from "./configurations/delete-configuration.js";
import makeGetConfigurationController from "./configurations/get-configuration.js";
import makeGetConfigurationsController from "./configurations/get-configurations.js";
import makePatchConfigurationController from "./configurations/patch-configuration.js";
import makePostConfigurationController from "./configurations/post-configuration.js";



const getConfigurationController = makeGetConfigurationController({ getConfiguration });
const postConfigurationController = makePostConfigurationController({ addConfiguration });



const getConfigurationsController = makeGetConfigurationsController({ listConfigurations });

const updateConfigurationController = makePatchConfigurationController({ updateConfiguration });

const deleteConfigurationController = makeDeleteConfigurationController({ deleteConfiguration });

const configurationService = Object.freeze({
    getConfigurationController,
    postConfigurationController,
    getConfigurationsController,
    updateConfigurationController,
    deleteConfigurationController
});


export default configurationService;

export {
    getConfigurationController,
    postConfigurationController,
    getConfigurationsController,
    updateConfigurationController,
    deleteConfigurationController
}