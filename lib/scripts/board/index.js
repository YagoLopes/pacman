"use strict";

module.exports = {
  startBoard: function startBoard() {
    var map = ["WWWWWWWWWWWWWWWWWWWWW", "W B W     W  X  W W W", "W W W WWW WWWWW W W W", "W W W   W B   W W   W", "W WWWWWWW W WWW W W W", "W   X  B  W  X  W W W", "W WWW WWWWW WWWWW W W", "W W   W B W W   X W W", "W WWWWW W W W WWW W W", "P     W W W W W W WWW", "WWWWW W W W W W W W W", "W  X  W W W   W W W W", "W WWWWWWW WWWWW W W W", "W  XXX  W   X   W   W", "WWWWWWWWWWWWWWWWWWWWW"];

    function popularColuna(map) {
      var boardArea = document.querySelector("#conteiner");

      for (var i = 0; i < map.length; i++) {
        var row = document.createElement("div");
        row.id = "column-" + i;
        row.classList.add("row");
        boardArea.appendChild(row);
        popularRow(i, row, map);
      }
    }

    function popularRow(i, rowLinha, map) {
      for (var j = 0; j < map[i].length; j++) {
        var rowArea = document.getElementById(rowLinha.id);
        var row = document.createElement("div");
        var rowInsed = document.createElement("div");
        var rowInsideTheUpper = document.createElement("div");
        row.id = i + "-" + j;
        rowInsed.id = i + "-" + j;
        rowInsideTheUpper.id = i + "-" + j;
        row.classList.add("block");

        if (map[i][j] === "W") {
          rowInsed.classList.add("wall");
        }

        if (map[i][j] === " ") {
          rowInsed.classList.add("wrapper");
          rowInsideTheUpper.classList.add("fruit");
        }

        if (map[i][j] === "X") {
          rowInsed.classList.add("empty");
          rowInsideTheUpper.classList.add("emptyX");
        }

        if (map[i][j] === "B") {
          rowInsed.classList.add("wrapper");
          rowInsideTheUpper.classList.add("ball");
        }

        if (map[i][j] === "P") {
          var mount = function mount() {
            var player = document.createElement("div");
            player.id = "player";
            player.className = "player";
            player.style.position = "aboslute";
            var board = document.getElementById("");
            board.appendChild(player);
          };

          mount();
        }

        rowInsed.appendChild(rowInsideTheUpper);
        row.appendChild(rowInsed);
        rowArea.appendChild(row);
      }
    }

    popularColuna(map);
  }
};