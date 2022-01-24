let array=[]
let snakeHead={
    pos_x: 5,
    pos_y: 5
};
let snakeLength=2;
let milis = 1000;
for (x=0;x<10;x++) {
    for (y=0;y<10;y++){
        let obj_id=x*10+y
        let obj={
            id: obj_id,
            isSnake: false,
            isApple: false,
            isSnakeHead: false,
            pos_x: x,
            pos_y: y
        }
        array.push(obj)
    }
}
const setApple= () => {
    let rand = Math.floor(Math.random() * 101);
    array[rand].isApple=true;
}
setApple()
let snakeArr = []
const sprawdz = () => {
    array.forEach(element=> {
        let elemencior = document.getElementById(element.id)
        if (element.pos_x==snakeHead.pos_x && element.pos_y==snakeHead.pos_y) {
            if (!snakeArr.includes(element)){
                snakeArr.push(element)
                element.isSnakeHead=true;
            }
            element.isSnake=true;
            let snake = document.getElementById(element.id)
            snake.style.backgroundColor="green"
        }
        else if (element.isApple){
            document.getElementById(element.id).style.backgroundColor="red"
        }
        else{
            elemencior.style.backgroundColor='cornsilk'
        }

        if ((element.pos_x==snakeHead.pos_x && element.pos_y==snakeHead.pos_y) && element.isApple==true ){
            snakeLength+=1;
            element.isApple=false;
            (milis<200? milis-=20 : milis=200)
            setApple();
        }

        snakeArr.forEach(element => {
            if (element.isSnake && !(element.pos_x==snakeHead.pos_x && element.pos_y==snakeHead.pos_y)){
                let snake = document.getElementById(element.id)
                isSnakeHead=false;
                snake.style.backgroundColor="lightgreen"
            }
            
        });
        if (snakeArr.length>snakeLength){
            snakeArr[0].isSnake=false;
            snakeArr.shift()
        }
        
        
    })
}
let key = ''
document.onkeydown = logKey;

function logKey() {
    switch(event.key){
        case 'ArrowUp':
            key = 'ArrowUp'
            clearInterval(interval)
            licz()
            
            break;
        case 'ArrowDown':
            key = 'ArrowDown'
            clearInterval(interval)
            licz()
            
            break;
        case 'ArrowLeft':
            key = 'ArrowLeft'
            clearInterval(interval)
            licz()
            break;
        case 'ArrowRight':
            key = 'ArrowRight'
            clearInterval(interval)
            licz()
            break;
        }
        onInterval(licz, milis)
        console.log(array)
}
console.log(key)
str=""
array.forEach(element => {
    str+=(`<div class="obj" id="${element.id}"></div>`)
});
document.body.innerHTML=str
const onInterval = (callback, ms) => {
    interval = setInterval(callback, ms);
};

const licz = () => {
        sprawdz()
        switch(key){
            case 'ArrowUp':
                snakeHead.pos_x-=1
                break;
            case 'ArrowDown':
                snakeHead.pos_x+=1
                break;
            case 'ArrowLeft':
                snakeHead.pos_y-=1
                break;
            case 'ArrowRight':
                snakeHead.pos_y+=1
                break;
        }
        if (snakeHead.pos_y>9) {
            snakeHead.pos_y=0
        }
        if (snakeHead.pos_y<0) {
            snakeHead.pos_y=9
        }
        if (snakeHead.pos_x>9) {
            snakeHead.pos_x=0
        }
        if (snakeHead.pos_x<0) {
            snakeHead.pos_x=9
        }
    }

onInterval(licz, milis)