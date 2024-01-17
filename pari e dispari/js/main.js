// ## Traccia
// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// ## Svolgimento

// * Chiedo all'utente di inserire (Pari o Dispari)
let evenOdd = prompt('Scegli pari o dispari');
console.log('Il giocatore ha scelto: ' + evenOdd);

// * Chiedo all'utente di inserire un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(`Il giocatore ha scelto: ${userNumber}`);

// * Io "PC" genero un numero random da 1 a 5
const PCnumber = getRandomNumber(1, 5);
console.log('Il numero scelto per il PC è: ' + PCnumber);

// * Sommo il numero scelto dall'utente e il numero generato random
let numberSum = (PCnumber + userNumber);
console.log('La somma dei numeri è: ' + numberSum);

// * Controllo che la somma sia pari o dipari
let evenOrOdd = getEvenNumber();
console.log('La somma dei numeri è: ' + evenOrOdd);

// * Controllo il primo input inserito dall'utente (Pari o Dispari)

if (evenOrOdd === evenOdd) {
    console.log('Vince il Giocatore');
} else {
    console.log('Vince il PC');
}
// SE la somma dei due numeri è uguale al primo input inserito dall'utente
// - Stampo 'Vince il giocatore'

// ALTRIMENTI
// - Stampo 'Vince il PC'