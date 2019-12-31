import { Request, Response, Router } from 'express';
import { usersModel } from '../models/users.model';

const userRouter: Router = Router();

userRouter.get('/', (req: Request, res: Response) => {
    usersModel.find({}, function(err, users){
        if(err){ throw err; }
        res.json(users);
    });
});

userRouter.get('/read-user/:id', (req: Request, res: Response) => {
   usersModel.findOne({ id: req.params.id }, function(err, user){
       if (err) { throw err; }
       res.json(user);
   }); 
});

userRouter.get('/test', (req: Request, res: Response) => {
    usersModel.find({}, function(err, users){
        if(err){ throw err; }
        res.json({
            message: "test"
        });
    });
});


export { userRouter };