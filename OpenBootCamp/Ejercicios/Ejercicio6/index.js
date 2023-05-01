// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let lista = new Array('huevos', 'leche', 'papas', 'gaseosa', 'manteca' );
console.log(lista);
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push('Aceite de Girasol')
console.log(lista);
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista.pop();
console.log(lista);
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = new Array(
    {
        'titulo': 'El padrino 2',
        'director': 'Francis Ford Coppola',
        'fecha': new Date(1974, 11, 12)
    },
    {
        'titulo': 'Irishman',
        'director': 'Martin Scorsese',
        'fecha': new Date(2019,10,1),
    },
    {
        'titulo': 'Heat',
        'director': 'Michael Mann',
        'fecha': new Date(1995,11,15)
    }
);

console.log(peliculas);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = peliculas.map(director => director.director);
console.log(listaDirectores)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaPeliculas = peliculas.map(pelicula => pelicula.titulo);
console.log(listaPeliculas)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log(listaDirectores.concat(listaPeliculas))

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log([...listaDirectores, ...listaPeliculas])

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let lista_mayor = peliculas.filter (pelicula => pelicula.fecha > new Date(2010,0,1));
console.log(lista_mayor)