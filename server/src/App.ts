//import lib
import 'reflect-metadata';
import express from 'express'
import morgan from 'morgan';
import bodyParser from "body-parser";

//middleware
import nodeErrorHandle from './middleware/nodeErrorHandle';


//configs
import configs from './configs'
export class Application {
    app: express.Application;
    config = configs;
    constructor() {
        this.app = express();
        this.app.use(
            morgan("dev", {
                skip: () => process.env.NODE_ENV === 'test'
            })
        )
        this.setUpBodyData();
    }
    setupServer = async() => {
        await this.startServer();
    }
    setUpBodyData = async() => {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }));     
    }

    startServer = async() => {
        return new Promise((resolve, reject) => {
            this.app.listen(+this.config.port,() => {
                console.log('Server listening');
                resolve(true)
            })
            .on('error',nodeErrorHandle)
        })
    }
}

