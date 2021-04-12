import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class MagicLinkGateway {
  @WebSocketServer() server: Server;
}
