//Risultati della MIA giocata contro la CPU
// CPU: Riga | User: Colonna
const RES=[
    ['p','w','l'],
    ['l','p','w'],
    ['w','l','p']
]

export function play(playerChoice){
    //Funzione che in base alla label estrae il numero della scelta del giocatore
    // 0-> carta
    // 1-> forbice
    // 2-> sasso
    let cpuChoice=Math.floor(Math.random()*3)
    console.log("Gioca la partita. CPU sceglie:", cpuChoice, ". Player sceglie: ",playerChoice)
    const result=RES[cpuChoice][playerChoice]
    
    return result
}