import express from "express";

export default class App {
    public app: express.Application;

    constructor() {
        this.app = express()
    }

    public listen() {
        this.app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000.");
        })
    }
}