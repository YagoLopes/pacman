const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W  W    W W",
  "W WWWWW W W W WWW W W",
  "P     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

let boardArea = document.querySelector("#board");

for (let i = 0; i < map.length; i++) {
  let coluna = document.createElement("div");
  coluna.id = "column-" + i;
  coluna.classList.add("coluna");
  boardArea.appendChild(coluna);

  for (let j = 0; j < map[i].length; j++) {
    let celArea = document.getElementById(coluna.id);
    let cel = document.createElement("div");
    let celFilha = document.createElement("div");
    let celMenor = document.createElement("div");
    cel.id = i + "-" + j;
    celFilha.id = i + "-" + j;
    celMenor.id = i + "-" + j;
    if (map[i][j] === "W") {
      cel.classList.add("wall");
      celFilha.classList.add("wallMenor");
    }
    if (map[i][j] === " ") {
      cel.classList.add("accessReleased");
      celFilha.classList.add("accessReleasedMenor");
      celMenor.classList.add("accessReleasedMenorAinda");
    }
    if (map[i][j] === "P") {
      cel.classList.add("player");
    }
    celFilha.appendChild(celMenor);
    cel.appendChild(celFilha);
    celArea.appendChild(cel);
  }
}
