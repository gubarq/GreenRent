import express = require('express');
import {currentDateOfExecution} from "./common/middlewares";
import {bikeRoutes, scooterRoutes} from "./routes";

const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());
app.use(currentDateOfExecution);

app.use(bikeRoutes,scooterRoutes);

app.listen(3000, () => {
    console.log('Server started')
})