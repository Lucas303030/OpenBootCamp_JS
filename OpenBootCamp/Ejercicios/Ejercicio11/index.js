function alwaysTrue() {
    return true
};
console.log(alwaysTrue());

function delay() {
    return setTimeout(() => { console.log("Holis")     
    }, 2000);
};
console.log(delay())

function* generaPares() {
    let num = 0
    while (num < 10) {
       yield num += 2; 
    }
}

const generador = generaPares()

console.log(generador.next().value);

console.log(generador.next().value);

console.log(generador.next().value);

console.log(generador.next().value);

console.log(generador.next().value);

console.log(generador.next().value); // Max 10