function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max + min - 1) + min);
    return randomNumber;
}


function getEvenNumber() {
    if (numberSum % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
};