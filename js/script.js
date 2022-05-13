
let livello = document.getElementById(`difficoltà`);
const button = document.getElementById (`invio`);
const griglia = document.getElementById (`griglia`);
let valoreLivello = livello.value;
let nodeFacile;
let nodeMedio;
let nodeDifficile;


button.addEventListener(`click`,{
  
    // L’utente indica un livello di difficoltà 
    if (valoreLivello = `1`) {
        
        for(let i = 0; i < 100; i++){
            const livFacile = livellobase ();

            griglia.append(livFacile);
            
        }

        
    }

}


)

function livellobase () {
    let nodeFacile = document.createElement ("div");
    nodeFacile.classList.add (`square`, `square-facile`);
    return nodeFacile;

}

console.log(nodeFacile);


function livelloMedio () {
    let nodeMedio= document.createElement ("div");
    nodeMedio.classList.add (`square`, `square-medio`);
    return nodeMedio;

}

function livelloDifficile () {
    let nodeDifficile = document.createElement ("div");
    nodeDifficile.classList.add (`square`, `square-difficile`);
    return nodeDifficile;

}


// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.