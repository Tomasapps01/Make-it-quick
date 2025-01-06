// Traducidos (72 cartas)
const rollTraducidos = document.getElementById('roll-traducidos');
if (rollTraducidos) {
    rollTraducidos.addEventListener('click', () => {
        const randomNum = Math.floor(Math.random() * 72) + 1;
        document.getElementById('card-image-traducidos').src = `images/traducidos/${randomNum}.jpg`;
        document.getElementById('card-name-traducidos').innerText = randomNum;
    });
}

// Propios (32 cartas)
const rollPropios = document.getElementById('roll-propios');
if (rollPropios) {
    rollPropios.addEventListener('click', () => {
        const randomNum = Math.floor(Math.random() * 32) + 1;
        document.getElementById('card-image-propios').src = `images/propios/${randomNum}.jpg`;
        document.getElementById('card-name-propios').innerText = randomNum;
    });
}