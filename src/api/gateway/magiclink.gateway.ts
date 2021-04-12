import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ path: '/socket', namespace: '/magiclink' })
export class MagicLinkGateway {
  @WebSocketServer() server: Server;
}
