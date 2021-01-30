//player
let boxTop = -145;
let boxLeft = 1;

function start() {
  mount();
}

function mount() {
  const player = document.createElement("span");
  player.id = "player";
  player.className = "player";
  player.style.position = "relative";
  const board = document.getElementById("conteiner");
  board.appendChild(player);
  checkAndMove(player);
}

function checkAndMove(player) {
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    moveAndCheckColision(keyName, player);
  });
}

function moveAndCheckColision(keyName, player) {
  const blocks = document.querySelectorAll(".block");

  switch (keyName) {
    case "ArrowDown":
      const arrowDown = [...blocks].find((elemento) => {
        if (elemento.offsetRight === player.offsetRight) {
          return elemento;
        }
        return null;
      });

      if (arrowDown) {
        boxTop += 10;
        player.style.top = `${boxTop}px`;
        player.style.transform = "rotate(100deg)";
      }
      return;

    case "ArrowUp":
      const arrowUp = [...blocks].find((elemento) => {
        if (elemento.offsetRight === player.offsetRight) {
          return elemento;
        }
        return null;
      });
      if (arrowUp) {
        boxTop -= 10;
        player.style.top = `${boxTop}px`;
        player.style.transform = "rotate(-85deg)";
      }
      return;

    case "ArrowRight":
      const arrowRight = [...blocks].find((elemento) => {
        if (elemento.offsetRight === player.offsetRight) {
          return elemento;
        }
        return null;
      });
      if (!arrowRight) {
        boxLeft += 15;
        player.style.left = `${boxLeft}px`;
        player.style.transform = "rotate(0deg)";
      }
      return;

    case "ArrowLeft":
      const arrowLeft = [...blocks].find((elemento) => {
        if (elemento.offsetLeft === player.offsetLeft) {
          return elemento;
        }
        return null;
      });
      if (!arrowLeft) {
        boxLeft -= 15;
        player.style.left = `${boxLeft}px`;
        player.style.transform = "rotate(-175deg)";
      }

      return;

    default:
      return;
  }
}
