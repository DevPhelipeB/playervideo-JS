// FUNCÃO TELA CHEIA 

function telaCheia(){      
 let vid = document.getElementById("video1");
    vid.requestFullscreen();  

}  


// FUNÇÃO MUDA TAMANHO
let changeSize = (w, h) => {
    let vid = document.getElementById("video1");
    vid.width = w;
    vid.height = h;
}

// FUNÇÃO PLAY/ PAUSE
let play_pause = () => {
    let vid = document.getElementById("video1");
    let but = document.getElementById("play_pause");
    if (vid.paused) {
        vid.play();
        but.innerHTML = "&nbsp;⏸&nbsp;";
    } else {
        vid.pause();
        but.innerHTML = "&nbsp;▶&nbsp;";
    }
}

// FUNÇÃO AUMENTA VOLUME 

function aumetaVolume() {
    let vid = document.getElementById("video1");
    vid.volume += 0.2; // Aumenta a cada clique;
}


// FUNÇÃO DIMINUIR VOLUME 
function ReduzVolume() {
    let vid = document.getElementById("video1");
    vid.volume -= 0.1; // Diminuir a cada clique;
}


// FUNÇÃO MUTAR  
function Muted() {
    let vid = document.getElementById("video1");
    vid.volume = 0; // ZERA O VOLUME;
}


