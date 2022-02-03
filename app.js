let array = [];
let len = 5;
let milis = 1000;
let trail = [];
let map_size = 20;
for (x = 0; x < map_size; x++) {
  for (y = 0; y < map_size; y++) {
    let obj_id = x * map_size + y;
    let obj = {
      id: obj_id,
      isSnake: false,
      isApple: false,
      pos_x: x,
      pos_y: y,
    };
    array.push(obj);
  }
}
str = "";
array.forEach((element) => {
  str += `<div class="obj" id="${element.id}"></div>`;
});
document.body.innerHTML = str;
px = py = 5;
ax = ay = 5;
xv = yv = 0;
document.onkeydown = logKey;
const setApple = () => {
  let rand = Math.floor(Math.random() * map_size * 10 + 1);
  array[rand].isApple = true;
};
setApple();
function game() {
  px += xv;
  py += yv;

  if (px < 0) {
    px = map_size - 1;
  }
  if (py > map_size - 1) {
    py = 0;
  }
  if (px > map_size - 1) {
    px = 0;
  }
  if (py < 0) {
    py = map_size - 1;
  }

  array.forEach((element) => {
    document.getElementById(element.id).style.backgroundColor = "cornsilk";
    for (var i = 0; i < trail.length; i++) {
      if (trail[i].x == element.pos_x && trail[i].y == element.pos_y) {
        document.getElementById(element.id).style.backgroundColor = "green";
      }
      if (trail[i].x == px && trail[i].y == px) {
        len = 5;
      }
    }
    if (element.isApple) {
      document.getElementById(element.id).style.backgroundColor = "red";
    }

    if (px == element.pos_x && py == element.pos_y && element.isApple) {
      len++;
      element.isApple = false;
      setApple();
    }
  });
  setTimeout(() => {
    trail.push({ x: px, y: py });
    while (trail.length > len) {
      trail.shift();
    }
  }, 1000 / 15);
}
function logKey() {
  switch (event.key) {
    case "ArrowLeft":
      xv = 0;
      yv = -1;
      break;
    case "ArrowUp":
      xv = -1;
      yv = 0;
      break;
    case "ArrowRight":
      xv = 0;
      yv = 1;
      break;
    case "ArrowDown":
      xv = 1;
      yv = 0;
      break;
  }
}
setInterval(game, 1000 / 15);
/* 
setApple()
let snakeArr = []
const sprawdz = () => {
    array.forEach(element=> {
        let elemencior = document.getElementById(element.id)
        if (element.pos_x==snakeHead.pos_x && element.pos_y==snakeHead.pos_y) {
            if (!snakeArr.includes(element)){
                snakeArr.push(element)
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

onInterval(licz, milis) */
