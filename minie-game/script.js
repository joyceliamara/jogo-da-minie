const minie = document.querySelector('.minie');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    minie.style.bottom = position + 'px';
                }

            }, 20);
        } else {
            //subindo
            position += 20;
            minie.style.bottom = position + 'px';
        }


    }, 20);
}

function createArvores() {
    const arvores = document.createElement('div');
    let arvoresPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);

    arvores.classList.add('arvores');
    arvores.style.left = 1000 + 'px';
    background.appendChild(arvores);

    let leftInterval = setInterval(() => {

        if (arvoresPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(arvores);
        } else if (arvoresPosition > 0 && arvoresPosition < 60 && position < 60) {
            //Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';

        } else {
            arvoresPosition -= 10;
            arvores.style.left = arvoresPosition + "px";
        }
    }, 20);

    setTimeout(createArvores, randomTime);
}

createArvores();

document.addEventListener('keyup', handleKeyUp);