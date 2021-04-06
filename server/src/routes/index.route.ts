import { Router } from 'express';
import RaffleController from '../controllers/RaffleController';

const routes = Router();
routes.post('/raffle', RaffleController.store);
routes.get('/raffle/:id', RaffleController.show);

export default routes;