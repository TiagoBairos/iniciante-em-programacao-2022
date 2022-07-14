const todosQuadradosDoJogo = document.querySelectorAll(".quadrado-jogo");
const X = "X";
const O = "O";
let turno = 0;
let checarTurno = true;
let terminoJogo = false;
let jogador = O;


//reniciar jogo
function reiniciarJogo() {
    location.reload ()
}

//selecionar X ou O
function selecionarArea(posicaoLinha, posicaoColuna) {
    
    marcarJogadorAtivo(jogador);

    if (checarTurno == true) {
        jogador = X;
        verificaVencedor();
    } else {
        jogador = O;
        verificaVencedor();
    }
        if (checarTurno == true) {
        desenharSimbolo("X", posicaoLinha, posicaoColuna)
        verificaVencedor();
    } else if (checarTurno == false) {
        desenharSimbolo("O", posicaoLinha, posicaoColuna)
        verificaVencedor();
    }
    turno = checarTurno ? X : O
    checarTurno = !checarTurno;
}

//verifica vencedor ou empate

function verificaVencedor(){
    
    const square = document.querySelectorAll(".quadrado-jogo");

    if( checarQuadrados(square[0], square[1], square[2]) || 
        checarQuadrados(square[3], square[4], square[5]) ||
        checarQuadrados(square[6], square[7], square[8]) ||
        checarQuadrados(square[0], square[3], square[6]) ||
        checarQuadrados(square[1], square[4], square[7]) ||
        checarQuadrados(square[2], square[5], square[8]) ||
        checarQuadrados(square[0], square[4], square[8]) ||
        checarQuadrados(square[2], square[4], square[6])
    ){
        todosQuadradosDoJogo.forEach((square) => {
            square.removeAttribute("onclick");
        })

        exibirResultado(`Jogador ${jogador} venceu!`);
    } 
    else{
        checarTodosQuadrados() ? exibirResultado(`Empate!`) : '';
    }

}
function checarQuadrados(square1, square2, square3){

    if(square1.textContent === square2.textContent && square1.textContent === square3.textContent && square1.textContent !== ""){
        return true;
    }
    return false;
}

function checarTodosQuadrados(){

    for(let i in todosQuadradosDoJogo){
        if(todosQuadradosDoJogo[i].textContent ===''){
            return false;
        }       
    }
    return true;
}