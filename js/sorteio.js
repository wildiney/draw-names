/**
 * SORTEIO
 */
/**
 * Participantes
 * @type Array
 */
var participantes = ["ADALBERTO FERREIRA DOS SANTOS", "FABIANA ROSA", "FERNANDA BOCCHIGLIERI", "ERIK SILVA"];

/**
 * Telefone dos participantes
 * @type Array
 */
var telefones= ["(11) 00000-0000", "(86) 00000-0000", "(86) 00000-0000", "(12) 00000-0000"];

/**
 * Id da div referente à entrada do nome
 * @type @exp;document@call;getElementById
 */
var input_nome=document.getElementById("nome");

/**
 * Id da div referente ao telefone
 * @type @exp;document@call;getElementById
 */
var input_telefone = document.getElementById("telefone");

/**
 * Fields
 * Quantidade de letras no display
 * @type Number
 */
var fields = 38; //letras

/**
 * Times
 * Quantidade de rodadadas dos nomes dos participantes até serem sorteados
 * @type Number
 */
var times = 100; //participantes

/**
 * Clear Data
 * Limpa os dados de exibição
 * @returns {undefined}
 */
function cleardata(){
    input_nome.innerText="";
    input_telefone.innerText="";
}

/**
 * Blink
 * Função para "piscar" o resultado final
 * @param {string} div
 * @returns void
 */
function blink(div){
    d = document.getElementById(div);
    piscar = 0;
    var interval = setInterval(function() {
        if(piscar < 7){
            if (d.style.visibility === 'hidden') {
                d.style.visibility = 'visible';
            } else {
                d.style.visibility = 'hidden';
            }
            
            piscar++;
        } else {
            clearInterval(interval);
            d.style.visibility = 'visible';
        }
    }, 500);
}

/**
 * SORT
 * Função principal
 * Efetua o sorteio entre os nomes dos participantes de acordo com os parâmetros passados nas variáveis
 * @returns {undefined}
 */
function sorteio(){
    cleardata();
    var indice = Math.floor((Math.random() * participantes.length));
    var nome = participantes[indice];
    var telefone = telefones[indice];
    var nomeSorteado = "";
    
    if(nome.length < fields){
        var diff = fields-nome.length;
        for(i=0; i<diff; i++){
            nome+=" ";
        }
    } else {
        nome = nome.substring(0,fields);
    }
    
    for(i=0;i<nome.length;i++){
        nomeSorteado+="<span class='quad nome'>" + nome[i] + "</span>";
    }
    
    if(times>0){
        newindice = Math.floor((Math.random() * participantes.length));
        setTimeout("sorteio(participantes[newindice])",10);
        times--;
        input_nome.innerHTML=nomeSorteado;
    } else {
        input_nome.innerHTML=nomeSorteado;
        newNumber="";
        for(i=0; i<telefone.length;i++){
            if(i>4 && i<10){
                newNumber += "*";
            } else {
                newNumber += telefone[i];
            }
        }
        input_telefone.innerHTML = newNumber;
        blink("resultado");
        times = 100; 
    }
}

/**
 * Load and execute
 */
$(document).ready(function () {
    $("#sortear").on("click",sorteio);
});

