import express, {Request, Response} from 'express';
import routes from './routes/index';
const app = express();
const port = process.env.port || 3000;

app.get('/', (req: Request, res: Response) => { //Útil en un controlador
    res.send('api works');
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`api is running in port ${port}`);
});