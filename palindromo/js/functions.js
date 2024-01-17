function palindromeControl(userWord) {

    if (userWord == '') {
        alert('Inserisci una parola altrimenti non posso vedere se è Palindroma o meno');
        return;
    } else {

        // splitto la parola in singole lettere con array
        let separatedWord = userWord.split('');
        console.log(separatedWord);
        // inverto le singole lettere generate
        let separatedWordReverse = separatedWord.reverse();
        console.log(separatedWordReverse);
        // ricostruisco la stringa dalle parole splittate
        let joinWordreverse = separatedWordReverse.join('');
        console.log(joinWordreverse);

        // controllo se la parola inserita è uguale a quella inversa
        if (userWord == joinWordreverse) {
            return true;
        } else {
            return false;
        }
    };

}

// -------------------------------------------------------
