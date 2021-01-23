let boxTop2 = 0;
let boxLeft2 = 0;

function start() {
  mount();
}

function mount() {
  const ghost = document.createElement("div");
  ghost.id = "ghost";
  ghost.style.position = "relative";
  const board = document.getElementById("board");
  board.appendChild(ghost);
  move(ghost);
}

function move(ghost) {
  function top(random) {
    if (random % 2 === 0) {
      boxTop2 += 10;
      ghost.style.top = `${boxTop2}px`;
    } else {
      boxTop2 -= 10;
      ghost.style.top = `${boxTop2}px`;
    }
  }

  function left(random) {
    if (random % 2 === 0) {
      boxLeft2 += 15;
      ghost.style.left = `${boxLeft2}px`;
    } else {
      boxLeft2 -= 15;
      ghost.style.left = `${boxLeft2}px`;
    }
  }

  setInterval(function () {
    const random = Math.floor(Math.random() * 100);
    random > 50 ? top(random) : left(random);
  }, 1000);
}

start();
