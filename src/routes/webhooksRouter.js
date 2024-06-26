import express from 'express';
import cardInstalledController from '../controllers/card-installed-controller';

const webhooksRouter = express.Router()

webhooksRouter.post('/card-installed', cardInstalledController)

export default webhooksRouter
