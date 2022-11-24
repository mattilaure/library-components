"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.play = play;
//Risultati della MIA giocata contro la CPU
// CPU: Riga | User: Colonna
var RES = [['p', 'w', 'l'], ['l', 'p', 'w'], ['w', 'l', 'p']];
function play(playerChoice) {
  //Funzione che in base alla label estrae il numero della scelta del giocatore
  // 0-> carta
  // 1-> forbice
  // 2-> sasso
  var cpuChoice = Math.floor(Math.random() * 3);
  var cpuChoiceToString = '';
  switch (cpuChoice) {
    case 0:
      cpuChoiceToString = "Carta";
      break;
    case 1:
      cpuChoiceToString = "Forbice";
      break;
    case 2:
      cpuChoiceToString = "Sasso";
      break;
  }
  console.log("Gioca la partita. CPU sceglie:", cpuChoice, ". Player sceglie: ", playerChoice);
  var result = {
    resultGame: RES[cpuChoice][playerChoice],
    cpu: cpuChoiceToString
  };
  return result;
}