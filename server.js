const log = console.log;

// Inicializamos el servidor http, socket.io y el número de puerto
const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: {
        origin: "*", // Permitir todas las conexiones CORS
        methods: ["GET", "POST"]
    }
});
const port = 3000;

http.listen(port, () => log(`Server listening on port: ${port}`));

// Evento de conexión de socket
io.on('connection', (socket) => {
    log('connected');
    
    // Manejar el evento 'updateFlightInfo'
    socket.on('updateFlightInfo', (data) => {
        log('Received flight info:', data);
        io.emit('flightInfoUpdated', data); // Emitir evento a todos los clientes
    });

    // Evento de desconexión de socket
    socket.on('disconnect', () => {
        log('conexión cerrada');
    });
});
