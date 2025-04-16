import { Router, Request, Response } from 'express';
import { getOrdersController } from '../controllers/salesorder.controllers';

// New Router instance
const router = Router();

// Home routes
router.get('/salesorders', (req: Request, res: Response) => {
  console.log('salesorder route called')
  getOrdersController(req, res);
});

export default router;