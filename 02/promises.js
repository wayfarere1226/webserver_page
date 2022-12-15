const empleados = [
    {
        id: 1,
        nombre: 'esteban'
    },
    {
        id: 2,
        nombre: 'nombre1'},
    {
        id: 3,
        nombre: 'nombre3'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {   
        id: 2, 
        salario: 1500
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id == id)?.nombre
    return new Promise((resolve, reject) => {
        (empleado) ? resolve(empleado) : reject (`Empleado con id ${id} no existe`);
        }
    );
}

//GET SALARIOOOOOOOOOOOOOOOOOOOO

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id == id)?.salario
    return new Promise((resolve, reject) => {
        (salario) ? resolve(salario) : reject (`Salario con id ${id} no existe`);
        }
    );
}

const id = 1;

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));



// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

let nombre;

getEmpleado(id)
    .then(empleado => { nombre = empleado; return getSalario( id ) })
    .then(salario => console.log('Empleado: ', nombre, 'tiene un salario de: ', salario))
    .catch(err => console.log(err));
