// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let hoy = new Date();
console.log(hoy);

let b_day = new Date(1990, 1, 7);
console.log(b_day);

let x = hoy > b_day;
console.log(x);

let b_day_day = b_day.getDay();
console.log(b_day_day);

let b_day_month = b_day.getMonth();
console.log(b_day_month + 1);

let b_day_year = b_day.getFullYear();
console.log(b_day_year);