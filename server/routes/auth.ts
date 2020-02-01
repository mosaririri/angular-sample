import { Request, Response, Router } from 'express';
import { usersModel } from '../models/users.model';

const authRouter: Router = Router();

authRouter.get('/login', (req: Request, res: Response) => {
   console.log(req);
    
    usersModel.find({id: req.query.id, password: req.query.password}, function(err, users) {
        console.log(req.query.id);
        console.log(req.query.password);
        
        console.log(users);
        
        if(err){console.log(err)};

        if(users.length == 0){
            res.send('false');
        }else{
            res.send('true');
        }
    });
});

export { authRouter }