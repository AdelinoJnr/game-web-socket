import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

import WebSocket from './socket';

// Variaveis de ambiente
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = createServer(app);
const io = new Server(server, { cors: { origin: WebSocket.origin, methods: WebSocket.methods } });

// Serviço socket
WebSocket.gameWebSocket(io);

export default server;