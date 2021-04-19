let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); //Renderixa o desenho que vai acontecer dentro do nosso canvas.
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBg(){
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenha o retângulo onde vai acontecer o jogo.
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i ++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBg();
criarCobrinha();