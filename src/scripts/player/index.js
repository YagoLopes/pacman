let boxTop = -145;
let boxLeft = 1;

function start() {
  mount();
}

function mount() {
  const player = document.createElement("div");
  player.id = "player";
  player.className = "player";
  player.style.position = "relative";
  const board = document.getElementById("conteiner");
  board.appendChild(player);
  move(player);
}

function move(player) {
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === "ArrowDown") {
      boxTop += 10;
      player.style.top = `${boxTop}px`;
      player.style.transform = "rotate(100deg)";
    }
    if (keyName === "ArrowUp") {
      boxTop -= 10;
      player.style.top = `${boxTop}px`;
      player.style.transform = "rotate(-85deg)";
    }
    if (keyName === "ArrowRight") {
      boxLeft += 15;
      player.style.left = `${boxLeft}px`;
      player.style.transform = "rotate(0deg)";
    }
    if (keyName === "ArrowLeft") {
      boxLeft -= 15;
      player.style.left = `${boxLeft}px`;
      player.style.transform = "rotate(-175deg)";
    }
  });
}

start();
