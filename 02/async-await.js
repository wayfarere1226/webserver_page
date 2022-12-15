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
        (salario) 
            ? resolve(salario) 
            : reject (`Salario con id ${id} no existe`);
        }
    );
}

const getInfoUsuario = async() => {
    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
    }
    catch(error){

        return error;
    }    
}

const id = 1;

getInfoUsuario(id)
    .then(msg => {

        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    });