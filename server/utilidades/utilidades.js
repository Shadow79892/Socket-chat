const crearMensaje = (nombre,mensaje) =>{
     
    return {
        nombre,
        mensaje,
        fecha: new Date().toDateString()
    };
}



module.exports = {
    crearMensaje
}