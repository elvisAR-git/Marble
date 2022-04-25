import express from 'express';
import dotenv from 'dotenv';
import { getConfigurationController, getConfigurationsController, postConfigurationController, updateConfigurationController, deleteConfigurationController } from './controllers/index.js';


import makeExpressCallback from './express-callback/index.js';

dotenv.config();

const apiRoot = process.env.DM_API_ROOT;
const app = express();

app.use(express.json());


app.post(`${apiRoot}/configurations`, makeExpressCallback(postConfigurationController));
app.get(`${apiRoot}/configurations`, makeExpressCallback(getConfigurationsController));
app.get(`${apiRoot}/configurations/:id`, makeExpressCallback(getConfigurationController));
app.patch(`${apiRoot}/configurations/:id`, makeExpressCallback(updateConfigurationController));
app.delete(`${apiRoot}/configurations/:id`, makeExpressCallback(deleteConfigurationController));


app.listen(process.env.DM_API_PORT, () => {
    console.log(`Listening on port ${process.env.DM_API_PORT}`);
});

export default app;