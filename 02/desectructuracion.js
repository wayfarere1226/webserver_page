const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',

    getNombre: function() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }

}

//console.log(deadpool.getNombre());
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

//const {nombre, apellido, poder } = deadpool;
//console.log(nombre, apellido, poder);

function imprimeHeroe( {nombre, apellido, poder }) {

    console.log(nombre, apellido, poder);
}

//imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ , , h3] = heroes;

console.log(h3);
