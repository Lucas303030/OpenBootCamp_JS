// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let datos = {
    nombre: 'Lucas',
    apellido: 'Javier',
    edad: 33,
    altura: 175,
    eresDesarrollador: true
    };

console.log(datos);

let edad = datos.edad;
console.log(edad);

let datos1 = [
    {
        ...datos},
    {
        nombre: 'Mariano',
        apellido: 'Iglesias',
        edad: 23,
        altura: 180,
        eresDesarrollador: true
    },
    {
            nombre: 'Manuel',
        apellido: 'Gomez',
        edad: 35,
        altura: 173,
        eresDesarrollador: false
    }
];

console.log(datos1);

datos1.sort((a,b) => a.edad + b.edad );
console.log (datos1)
