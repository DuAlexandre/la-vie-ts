import express from "express";
import { Routes } from "./interfaces/routes.interface";

class App {
    public app: express.Application;
    public port: string | number

    constructor(routes: Routes[]) {
        this.app = express()
        this.port = 3000

        this.initializeDependencies()
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        })
    }

    private initializeDependencies() {
        this.app.use(express.json())
    }
}

export default App