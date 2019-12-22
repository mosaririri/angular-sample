import { Request, Response, Router } from 'express';
import { usersModel } from '../models/users.model';

const userRouter: Router = Router();

userRouter.get('/', (req: Request, res: Response) => {
    usersModel.find({}, function(err, users){
        if(err){ throw err; }
        res.json(users);
    });
});

export { userRouter };