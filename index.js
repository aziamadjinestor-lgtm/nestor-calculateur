let display = document.getElementById("screen");

function add(value){
    if(grrr){
        display.value = "";
        grrr = false;
    }
    display.value += value;
}

function opp(value){
    if(moi){
        display.value = ""
        moi = false
    }

    if(grrr){
        grrr = false

    }
    display.value += value;
}

function clearScreen(){
    display.value = ""
}

function supprimer(){
    display.value = display.value.slice(0, -1);
}

let grrr = false
let moi = false

function resultat(){
    try{
        let calcul = eval(display.value)
        display.value = calcul
        grrr = true
    }catch{
        display.value = "Erreur";
        grrr = true
        moi = true
    }
    
}

function play(){
    let audio = new Audio("CMPTKey_Souris raspberry simple clic (ID 1735)_LaSonotheque.fr.wav");
    audio.play;
    audio.currentTime = 0;
}

window.addEventListener("keydown", (event) => {

    event.preventDefault();

    let touche = event.key;

    if(touche >= 0 && touche <= 9){
        add(touche);
        play();
    }

    if(['*', '/', '+', '+', '.'].includes(touche)){
        opp(touche);
        play();
    }

    if(touche === "Enter" || touche === "="){
        resultat()
        play();
    }

    if(touche === "Backspace"){
        supprimer();
        play()
    }

    if(touche === "Escape"){
        clearScreen();
        play()
    }



})



