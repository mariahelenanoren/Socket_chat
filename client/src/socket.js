import io from 'socket.io-client';

const socket = io('https://socket-chatt-app.herokuapp.com/', {
  transports: ['websocket'],
});

export { socket };
