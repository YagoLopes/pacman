let boxTop = 0;
let boxLeft = 0;

function start() {
  mount();
}

function mount() {
  const ghost = document.createElement("div");
  ghost.id = "ghost";
  ghost.style.position = "relative";
  const board = document.getElementById("board");
  board.appendChild(ghost);
  // move(ghost);
}

// function move(player) {
//   document.addEventListener("keydown", (event) => {
//     const keyName = event.key;
//     if (keyName === "ArrowDown") {
//       boxTop += 20;
//       player.style.top = `${boxTop}px`;
//     }
//     if (keyName === "ArrowUp") {
//       boxTop -= 20;
//       player.style.top = `${boxTop}px`;
//     }
//     if (keyName === "ArrowRight") {
//       boxLeft += 35;
//       player.style.left = `${boxLeft}px`;
//     }
//     if (keyName === "ArrowLeft") {
//       boxLeft -= 35;
//       player.style.left = `${boxLeft}px`;
//     }
//   });
// }

start();
