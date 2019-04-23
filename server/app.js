import express from 'express';
import bodyParser from 'body-parser';

import * as db from './utils/dbUtils';
import { serverPort } from "../etc/config.json";

db.setUpConntection();

const app = express();

app.use( bodyParser.json() );

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNotes(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNotes(req.body).then(data => res.send(data));
});

const server = app.listen(8080, () => {
    console.log(`server is running, port ${serverPort}`);
});
