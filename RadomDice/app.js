function rollDice(){
    const numberOfDice = document.querySelector('input').value;
    const resultDice = document.getElementById('resultDice');
    const resultImage = document.getElementById('resultImage');

    let values = [];
    let images = [];

    
    for(let i = 0 ; i < numberOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src=images/${value}.png>`);
    }

    resultDice.textContent = values.join(', ');
    resultImage.innerHTML = images.join('');

}