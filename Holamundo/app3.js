console.log('inicio programa');

setTimeout(() => {

    console.log('1er programa');
    
}, 3000);


setTimeout(() => {
    console.log('2do programa');    
}, 0);

setTimeout(() => {
    console.log('3er programa');    
}, 0);

console.log('fin programa');