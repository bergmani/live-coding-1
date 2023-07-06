// Escribe tu código aquí.
const lista = document.getElementById("lista");

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];


const Palabras = (palabra, palabras) => {
    let letrasPalabra = 0;
    for(let i = 0; i < palabra.length ; i ++){
        letrasPalabra ++;
    }
    return letrasPalabra;

console.log(letrasPalabra)
}
console.log(Palabras('bocina', myArray));




const li = document.createElement('li');
li.textContent = Palabras('bocina', myArray);
lista.appendChild(li);