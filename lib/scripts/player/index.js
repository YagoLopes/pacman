"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//player
var boxTop = -145;
var boxLeft = 1;

function start() {
  mount();
}

function mount() {
  var player = document.createElement("span");
  player.id = "player";
  player.className = "player";
  player.style.position = "relative";
  var board = document.getElementById("conteiner");
  board.appendChild(player);
  checkAndMove(player);
}

function checkAndMove(player) {
  document.addEventListener("keydown", function (event) {
    var keyName = event.key;
    moveAndCheckColision(keyName, player);
  });
}

function moveAndCheckColision(keyName, player) {
  var blocks = document.querySelectorAll(".block");

  switch (keyName) {
    case "ArrowDown":
      var arrowDown = _toConsumableArray(blocks).find(function (elemento) {
        if (elemento.offsetRight === player.offsetRight) {
          return elemento;
        }

        return null;
      });

      if (arrowDown) {
        boxTop += 10;
        player.style.top = "".concat(boxTop, "px");
        player.style.transform = "rotate(100deg)";
      }

      return;

    case "ArrowUp":
      var arrowUp = _toConsumableArray(blocks).find(function (elemento) {
        if (elemento.offsetRight === player.offsetRight) {
          return elemento;
        }

        return null;
      });

      if (arrowUp) {
        boxTop -= 10;
        player.style.top = "".concat(boxTop, "px");
        player.style.transform = "rotate(-85deg)";
      }

      return;

    case "ArrowRight":
      var arrowRight = _toConsumableArray(blocks).find(function (elemento) {
        if (elemento.offsetRight === player.offsetRight) {
          return elemento;
        }

        return null;
      });

      if (!arrowRight) {
        boxLeft += 15;
        player.style.left = "".concat(boxLeft, "px");
        player.style.transform = "rotate(0deg)";
      }

      return;

    case "ArrowLeft":
      var arrowLeft = _toConsumableArray(blocks).find(function (elemento) {
        if (elemento.offsetLeft === player.offsetLeft) {
          return elemento;
        }

        return null;
      });

      if (!arrowLeft) {
        boxLeft -= 15;
        player.style.left = "".concat(boxLeft, "px");
        player.style.transform = "rotate(-175deg)";
      }

      return;

    default:
      return;
  }
}