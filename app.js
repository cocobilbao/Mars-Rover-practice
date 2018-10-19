// Rover Object Goes Here
// ======================
var marsRover = {
  direction: "N",
  x: 0,
  y: 0
};
// ======================

// Crear el mapa

var marsMap = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];



// Hacer que gire a la izquierda


function turnLeft(){
  console.log("turnLeft was called!");
  switch (marsRover.direction){
    case "N":
    marsRover.direction = "W";
    break;

    case "W":
    marsRover.direction = "S";
    break;

    case "S":
    marsRover.direction = "E";
    break;

    case "E":
    marsRover.direction = "N";
    break; 
  }
console.log(marsRover.direction);
}

// Hacer que gire a la derecha

function turnRight(){
  console.log("turnRight was called!");
  switch (marsRover.direction){
    case "N":
    marsRover.direction = "E";
    break;

    case "E":
    marsRover.direction = "S";
    break;

    case "S":
    marsRover.direction = "W";
    break;

    case "W":
    marsRover.direction = "N";
    break;
  }
console.log(marsRover.direction);
}

// Hacer que avance hacia adelante

function moveForward(){
      console.log("moveForward was called")
      switch (marsRover.direction){
        case "N":
        [marsRover.x][marsRover.y--];
        break;

        case "W":
        [marsRover.x--][marsRover.y];
        break;

        case "S":
        [marsRover.x][marsRover.y++];
        break;

        case "E":
        [marsRover.x++][marsRover.y];
        break;
      }
console.log(marsRover.direction);
}
moveForward(marsRover.direction[0][0]);

// Coordenadas para que se mueva

var commands = ("rrlffffll");

function moves(){
for (var i=0; i<commands.length; i++){
  var instrucciones = commands[i];
switch (instrucciones){
  case "l":
  turnLeft();
  break;
  case "r":
  turnRight();
  break;
  case "f":
  moveForward();
  break;
}
}
}