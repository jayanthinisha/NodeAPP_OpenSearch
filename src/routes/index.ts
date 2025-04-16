import { Router } from 'express';
import homeRouter from './home.routes';
import usersRouter from './users.routes';
import salesOrderRoute from './salesorder.routes';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/home', homeRouter);
router.use('/users', usersRouter);
router.use('/salesorders', salesOrderRoute);

export default router;