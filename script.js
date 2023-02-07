const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");

document.addEventListener("keydown", function (event) {
    soundJump();
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 1000)
};

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        soundCrash()
        alert("GAME OVER!!!");
        let isNewGame = confirm("Начать сначала?");
        if (isNewGame == true) {
            window.location.reload()
        } else {
            window.close();
        }
    }
}, 5);

function soundJump() {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = '/sounds/jump.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
};

function soundCrash() {
    let audio2 = new Audio();
    audio2.src = '/sounds/crash.mp3';
    audio2.autoplay = true;
};