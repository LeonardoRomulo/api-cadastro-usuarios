import express from 'express';
import cors from 'cors';
import router from './routers/rotas.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);


app.listen(9000, () =>{
    const date = new Date();
    console.log(`Servidor inciado em: ${date}`);
});