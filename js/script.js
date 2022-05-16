
let livello = document.getElementById("difficoltà");
let button = document.getElementById (`invio`);
const griglia = document.getElementById (`griglia`);
console.log(livello, button);


let nodeFacile;
let nodeMedio;
let nodeDifficile;



        

// const myArrRandom = randomNumLivF (100, 1, 100);
// console.log(myArrRandom);



for(let i = 0; i < 100; i++){
    griglia.addEventListener("click",
    function() {
        this.classList.add("clicked");
    }
    )
    const livFacile = livellobase ();

    griglia.append(livFacile);
    // console.log(livFacile);
    
}


// for(let i = 0; i < 81; i++){
//     const livMedio = livelloMedio  ();
//     griglia.append(livMedio);

   
    
// }


// for(let i = 0; i < 49; i++){
//     const livDifficile = livelloDifficile  ();

//     griglia.append(livDifficile);
    
// }



               
// funzioni
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

// function randomNumLivF (numItems, min, max){
//     const arrInt =[];
//     while ( arrInt.length < numItems) {
//         let randomNum = getRandomMinMax (min, max);
//         if (!arrInt.includes (randomNum) ){
//             arrInt.push(randomNum);
//         }
//     }
// }

// function getRandomMinMax (rangeMin, RangeMax){
//     let result = Math.floor(Math.random() * (RangeMax - rangeMin));
//     return result;
// }




// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.