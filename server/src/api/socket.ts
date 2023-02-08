import { Server, Socket } from 'socket.io';

class WebSocket {
    public origin: string = process.env.URL_FRONT || 'http://localhost:3000';
    public methods: string[] = ['GET', 'POST'] ;
    
    private players: { id: string, nickname: string }[] = [];


    gameWebSocket(io: Server): void {
        io.on('connection', (socket) => {
            socket.on('nickname', ({ nickname }) => this.setNewPlayer(nickname, socket));

            socket.on('disconnect', () => {
                socket.emit('disconnected');
            });
        });
    }

    setNewPlayer(player: string, socket: Socket): void {
        this.players.push({ id: socket.id, nickname: player });
    }
}

export default new WebSocket;