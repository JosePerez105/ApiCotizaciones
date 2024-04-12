import express from 'express';
import cotizacionesRouter from './routes/cotizaciones.routes.js';
import { mongoose } from 'mongoose';
import cors from 'cors'
const port = 3000;
const app = express();
app.use(express.json());

app.use(cors());
app.use('/apicotizaciones', cotizacionesRouter)
app.get('/', (req, res) => {
    res.redirect('/apicotizaciones');
})
await mongoose.connect("mongodb://emmvargas11:mimamamemima@ac-eobhewm-shard-00-00.r4oaosy.mongodb.net:27017,ac-eobhewm-shard-00-01.r4oaosy.mongodb.net:27017,ac-eobhewm-shard-00-02.r4oaosy.mongodb.net:27017/?ssl=true&replicaSet=atlas-1135eg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Clouster0").then((data)=>console.log(`Conectado a la base de datos (${data.connection.name})`)).catch(e=>console.error(e))
app.listen(port, () => {
    console.log('Corriendo en el puerto 3000')
})