let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); //Renderixa o desenho que vai acontecer dentro do nosso canvas.
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let pontos = 0;

let direcao = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBg(){
    context.fillStyle = '#080d0d';
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenha o retângulo onde vai acontecer o jogo.
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i ++){
        context.fillStyle = "#11d147";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = '#d60e0a';
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direcao != 'right')direcao = 'left';
    if(event.keyCode == 38 && direcao != 'down')direcao = 'up';
    if(event.keyCode == 39 && direcao != 'left')direcao = 'right';
    if(event.keyCode == 40 && direcao != 'up')direcao = 'down';
}

function iniciarJogo(){

    if(snake[0].x > 15 * box && direcao == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direcao == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direcao == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direcao == 'up') snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over! :(');
            location.reload()
        } 
    }

    criarBg();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    /*switch(direcao){
        case "right":
            snakeX += box;
            break;
        case "left":
            snakeX -= box;
            break;
        case 'up':
            snakeY -= box;
            break;
        case 'down':
            snakeY += box;
            break;
    }*/

    if(direcao == "right")snakeX += box; 
    if(direcao == "left")snakeX -= box; 
    if(direcao == "up")snakeY -= box; 
    if(direcao == "down")snakeY += box; 

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //Iniciar o jogo a cada 100 milisegggggtgt

function reset(){
    location.reload()
}