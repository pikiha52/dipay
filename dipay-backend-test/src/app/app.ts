import express, { Express, Request, Response } from "express";
import mongoose, { Connection } from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import { companiesRouter } from "../modules/companie/routes";
import { response } from "../helpers/response";
import { fibonacciRoutes } from "../modules/fibonacci/routes";
import { employeRoutes } from "../modules/employe/routes/employeRoutes";
import { combinationRoutes } from "../modules/combination/routes/combinationRoutes";
import { countrieRoutes } from "../modules/countries/routes/countrieRoutes";
dotenv.config()

const port: any = process.env.APP_PORT || 3030;

const app: Express = express();
const mongoUri: string = process.env.MONGO_URL || "mongodb://localhost:27017/dipayDB"

mongoose.connect(mongoUri);

const db: Connection = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());

app.use('/api', companiesRouter);
app.use('/api', fibonacciRoutes)
app.use('/api', employeRoutes)
app.use('/api', combinationRoutes)
app.use('/api', countrieRoutes)

app.use((req: Request, res: Response, next: Function) => {
  return response(res, 404, '404', {}, 'Not Found')
})

app.listen(port, () => console.log(`Server up and running ${port} `));
