let array = [];
let len = 5;
let milis = 1000;
let snake_trail = [];
let map_size = 20;
let max_score = len - 5;
const container = document.querySelector(".container");
for (x = 0; x < map_size; x++) {
  for (y = 0; y < map_size; y++) {
    let obj_id = x * map_size + y;
    let obj = {
      id: obj_id,
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
str += `<div class="scorebar"><h1 class="rank">WYNIK: ${len - 5}</h1></br>`;
str += `<h1 class="top_rank">NAJWYZSZY WYNIK: ${max_score}</h1></div>`;
str += `<a href="https://github.com/Artuyees" class="name"
>Artur Kucinski | 2022</a
>`;
container.innerHTML = str;
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
    for (var i = 0; i < snake_trail.length; i++) {
      if (
        snake_trail[i].x == element.pos_x &&
        snake_trail[i].y == element.pos_y
      ) {
        document.getElementById(element.id).style.backgroundColor = "green";
      }
    }
    if (element.isApple) {
      document.getElementById(element.id).style.backgroundColor = "red";
    }

    if (px == element.pos_x && py == element.pos_y && element.isApple) {
      len++;
      if (len - 5 > max_score) {
        max_score = len - 5;
        document.querySelector(
          ".top_rank"
        ).innerHTML = `NAJWYZSZY WYNIK: ${max_score}`;
      }
      document.querySelector(".rank").innerHTML = `WYNIK: ${len - 5}`;
      element.isApple = false;
      setApple();
    }
  });
  for (var i = 0; i < snake_trail.length; i++) {
    if (snake_trail[i].x == px && snake_trail[i].y == py) {
      len = 5;
      document.querySelector(".rank").innerHTML = `WYNIK: ${len - 5}`;
    }
  }
  snake_trail.push({ x: px, y: py });
  while (snake_trail.length > len) {
    snake_trail.shift();
  }
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
