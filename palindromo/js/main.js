// ESERCIZIO PAROLA PALINDROMA

// * Chiedo all'utente con un prompt la parola da inserire
const userWord = prompt('Inserisci una Parola');


// HTML Var
const resultokElement = document.getElementById('resultok');
const resultkoElement = document.getElementById('resultko');
const resultContainerOkElement = document.getElementById('containerResultOk');
const resultContainerKoElement = document.getElementById('containerResultKo');

// * Porto la parola in una funzione
const result = palindromeControl(userWord);
console.log(result);


// condizione
if (result == true) {
    resultokElement.innerHTML = (`${userWord}: LA PAROLA E' PALINDROMA`);
    resultokElement.classList.remove('d-none');
    resultContainerOkElement.classList.remove('d-none');
} else {
    resultkoElement.innerHTML = (`${userWord}: LA PAROLA NON E' PALINDROMA`);
    resultkoElement.classList.remove('d-none');
    resultContainerKoElement.classList.remove('d-none');

}



// --------------------------------------------
