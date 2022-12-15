// setTimeout(() => {
//     console.log('holi')
// }, 1000);

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Esteban'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500)
}

getUsuarioById(11, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});