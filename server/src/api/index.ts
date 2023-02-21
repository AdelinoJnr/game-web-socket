import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import ModelNickname from '../models/nickname';
import bodyParser from 'body-parser';

import WebSocket from './socket';

// Variaveis de ambiente
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
const server = createServer(app);
const io = new Server(server, { cors: { origin: WebSocket.origin, methods: WebSocket.methods } });

// Serviço socket
WebSocket.gameWebSocket(io);

// nickname
app.use('/', async (req, res) => {
    const nickname = await ModelNickname.get();

    res.status(200).json(nickname)
});

export default server;