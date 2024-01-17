function palindromeControl() {

    let separatedWord = userWord.split('');
    console.log(separatedWord);

    let separatedWordReverse = separatedWord.reverse();
    console.log(separatedWordReverse);

    let joinWordreverse = separatedWordReverse.join('');
    console.log(joinWordreverse);

    if (userWord == joinWordreverse) {
        alert(`${joinWordreverse.toUpperCase()}: La Parola inserita è Palindroma`);
    } else {
        alert(`${joinWordreverse.toUpperCase()}: La Parola inserita non è Palindroma`);
    }

};