function start() {
  mount();
}

function mount() {
  for (let i = 1; i < 5; i++) {
    const ghost = document.createElement("div");
    ghost.id = `ghost-${i}`;
    ghost.className = "ghost";
    ghost.style.position = "relative";
    const conteiner = document.getElementById("conteiner");
    conteiner.appendChild(ghost);
    move(ghost);
  }
}

function move(ghost) {
  let boxTop = ghost.offsetTop;
  let boxLeft = ghost.offsetLeft;
  function top(random) {
    if (random % 2 === 0) {
      boxTop += 5;
      ghost.style.top = `${boxTop}px`;
    } else {
      boxTop -= 5;
      ghost.style.top = `${boxTop}px`;
    }
  }

  function left(random) {
    if (random % 2 === 0) {
      boxLeft += 8;
      ghost.style.left = `${boxLeft}px`;
    } else {
      boxLeft -= 8;
      ghost.style.left = `${boxLeft}px`;
    }
  }

  setInterval(function () {
    const random = Math.floor(Math.random() * 100);
    random > 50 ? top(random) : left(random);
  }, 1000);
}

start();
