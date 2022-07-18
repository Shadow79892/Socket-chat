var socket = io();

let params = new URLSearchParams(window.location.search);

if(!params.has('nombre') || !params.has('sala')){
    window.location = 'index.html';

    throw new Error('El nombre y sala es necesario');
}


let usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}


//entrar al chat.
socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat',usuario, function(resp){
        console.log('Usuarios conectados', resp);
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});


//Escuchar cambios de usuarios
socket.on('listaPersona', function(personas) {

    console.log(personas);

});


//Mensajes privados.
socket.on('mensajePrivado', function(mensaje){
    console.log('Mensaje Privado:', mensaje);
})