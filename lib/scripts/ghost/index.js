"use strict";

function start() {
  mount();
}

function mount() {
  for (var i = 1; i < 5; i++) {
    var ghost = document.createElement("div");
    ghost.id = "ghost-".concat(i);
    ghost.className = "ghost";
    ghost.style.position = "relative";
    var conteiner = document.getElementById("conteiner");
    conteiner.appendChild(ghost);
    move(ghost);
  }
}

function move(ghost) {
  var boxTop = ghost.offsetTop;
  var boxLeft = ghost.offsetLeft;

  function top(random) {
    if (random % 2 === 0) {
      boxTop += 5;
      ghost.style.top = "".concat(boxTop, "px");
    } else {
      boxTop -= 5;
      ghost.style.top = "".concat(boxTop, "px");
    }
  }

  function left(random) {
    if (random % 2 === 0) {
      boxLeft += 8;
      ghost.style.left = "".concat(boxLeft, "px");
    } else {
      boxLeft -= 8;
      ghost.style.left = "".concat(boxLeft, "px");
    }
  }

  setInterval(function () {
    var random = Math.floor(Math.random() * 100);
    random > 50 ? top(random) : left(random);
  }, 1000);
}

start();