import { Router, Request, Response } from 'express';
import { createUserController, deleteUserController, getUserByIdController, getUsersController, updateUserController } from '../controllers/users.controllers';

// New Router instance
const router = Router();

// Users routes
router.get('/', (req: Request, res: Response) => {
    getUsersController(req, res);
  //res.send('Users route!');
});

router.get('/:id', (req: Request, res: Response) => {
    getUserByIdController(req, res);
 // res.send(`User ${req.params.id} route!`);
});

router.post('/', (req: Request, res: Response) => {
    createUserController(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
    updateUserController(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
    deleteUserController(req, res);
});

export default router;