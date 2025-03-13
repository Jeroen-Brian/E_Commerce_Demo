import { PostgresDataSource } from "./data-source"
import * as express from 'express';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as swaggerUi from 'swagger-ui-express'

import* as YAML from 'yamljs';
import userRoutes from './routes/userRoutes'
import rolesRoutes from './routes/rolesRoutes'
import productTypeRoutes from './routes/productTypeRoutes'
import productRoutes from './routes/productRoutes'
import wishlistRoutes from './routes/wishlistRoutes'
import userCartRoutes from './routes/userCartRoutes'
import addressRoutes from './routes/addressRoutes'
import orderRoutes from './routes/orderRoutes'
// import placedOrderRoutes from './routes/placedOrderRoutes'



const swaggerDocument = YAML.load('./swagger.yaml')
dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/', async (req: Request, res: Response) => {
    console.log(`Application ${process.env.APP_NAME} running`)
    res.json(`Application ${process.env.APP_NAME} is now serving your request.`)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(userRoutes);
app.use(rolesRoutes);
app.use(productTypeRoutes);
app.use(productRoutes);
app.use(wishlistRoutes);
app.use(userCartRoutes);
app.use(addressRoutes);
app.use(orderRoutes);
// app.use(placedOrderRoutes);


app.listen(4500, () => console.log(`${process.env.APP_NAME} Server listening on: http://localhost:4500`))

PostgresDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })