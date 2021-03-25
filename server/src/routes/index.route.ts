import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import RaffleController from '../controllers/RaffleController';

const routes = Router();
routes.post('/raffle', asyncHandler(RaffleController.store));
routes.get('/raffle', asyncHandler(RaffleController.show));

export default routes;