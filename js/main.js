// ## Traccia
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// ## Svolgimento

// * Chiedo all'utente con un prompt la parola da inserire
const userWord = prompt('Inserisci una Parola');

const palindromeWord = palindromeControl();
console.log(palindromeWord);

// * Porto la parola in una funzione
// * Analizzo se la parola viene letta ugualmente anche al contrario

// SE viene letta ugualmente anche al contrario
//  - Stampo 'La parola scelta è Palindroma'

// ALTRIMENTI
// - Stampo 'La parola scelta non è Palindroma' 