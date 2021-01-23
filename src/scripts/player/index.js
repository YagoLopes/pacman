let boxTop = 0;
let boxLeft = 0;

function start() {
  mount();
}

function mount() {
  const player = document.createElement("div");
  player.id = "player";
  player.style.position = "relative";
  const board = document.getElementById("board");
  board.appendChild(player);
  move(player);
}

function move(player) {
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === "ArrowDown") {
      boxTop += 10;
      player.style.top = `${boxTop}px`;
    }
    if (keyName === "ArrowUp") {
      boxTop -= 10;
      player.style.top = `${boxTop}px`;
    }
    if (keyName === "ArrowRight") {
      boxLeft += 15;
      player.style.left = `${boxLeft}px`;
    }
    if (keyName === "ArrowLeft") {
      boxLeft -= 15;
      player.style.left = `${boxLeft}px`;
    }
  });
}

start();
