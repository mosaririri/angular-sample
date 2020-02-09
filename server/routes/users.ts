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

userRouter.put('/update-user/:id', (req: Request, res: Response) => {
    console.log('update');
    console.log(req.params.id);
    console.log(req.params);
    console.log(req.body);
    
    
    
    usersModel.updateOne({ id: req.body.id }, { $set:{
        name: req.body.name,
        password: req.body.password,
        positionCd: req.body.positionCd,
        storeCd: req.body.storeCd
    } }, function(err, user){
       if (err) { throw err; }
       console.log('update ok');
       
       res.json(user);
 
    })
})

userRouter.get('/test', (req: Request, res: Response) => {
    usersModel.find({}, function(err, users){
        if(err){ throw err; }
        res.json({
            message: "test"
        });
    });
});


export { userRouter };