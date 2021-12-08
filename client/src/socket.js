import io from 'socket.io-client';

const server = process.env.REACT_APP_REMOTE_SERVER || 'http://localhost:4000/';

const socket = io(server, {
  transports: ['websocket'],
});

export { socket };
