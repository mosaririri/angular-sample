import * as express from 'express';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';

import { userRouter } from './routes/users';
import { authRouter } from './routes/auth';

const app: express.Application = express();
app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/users', userRouter);

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

export { app };
