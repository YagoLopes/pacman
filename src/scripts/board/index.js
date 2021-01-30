function startBoard() {
  const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W B W     W  X  W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W B   W W   W",
    "W WWWWWWW W WWW W W W",
    "W   X  B  W  X  W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W B W W   X W W",
    "W WWWWW W W W WWW W W",
    "X     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W  X  W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W  XXX  W   X   W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
  ];
  popularColuna(map);
}

function popularColuna(map) {
  const boardArea = document.querySelector("#conteiner");
  for (let i = 0; i < map.length; i++) {
    const row = document.createElement("div");
    row.id = "column-" + i;
    row.classList.add("row");
    boardArea.appendChild(row);
    popularRow(i, row, map);
  }
}
function popularRow(i, rowLinha, map) {
  for (let j = 0; j < map[i].length; j++) {
    const rowArea = document.getElementById(rowLinha.id);
    const row = document.createElement("div");
    const rowInsed = document.createElement("div");
    const rowInsideTheUpper = document.createElement("div");
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

    rowInsed.appendChild(rowInsideTheUpper);
    row.appendChild(rowInsed);
    rowArea.appendChild(row);
  }
}
startBoard();
