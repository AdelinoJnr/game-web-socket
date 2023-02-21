import { Server, Socket } from 'socket.io';
import { insertNickname } from '../interface/nickname';
import ServiceNickname from '../services/nickname';

class WebSocket {
    public origin: string = process.env.URL_FRONT || 'http://localhost:3000';
    public methods: string[] = ['GET', 'POST'] ;
    
    private players: { id: string, nickname: string }[] = [];

    gameWebSocket(io: Server): void {
        io.on('connection', (socket) => {
            // console.log(socket.id)
            socket.on('nickname', async ({ nickname }) => await this.setNewPlayer(nickname, socket));

            socket.on('disconnect', () => {
                socket.emit('disconnected');
            });
        });
    }

    async setNewPlayer(player: string, socket: Socket): Promise<void> {
        const data: insertNickname = { nickname: player, createDate: new Date(), idSocket: socket.id };
        console.log(data)

        try {
            await ServiceNickname.set(data);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new WebSocket;