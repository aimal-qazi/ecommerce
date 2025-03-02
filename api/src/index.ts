import express, { json, urlencoded } from 'express';
import productsRouter from './routes/products/products';

const app = express();
const port = 5000;

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/products', productsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));