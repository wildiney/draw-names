/**
 * SORTEIO
 */

/****************
 * CONFIGURAÇÃO *
 ****************/

/**
 * Id da div referente à entrada do nome
 * @type @exp;document@call;getElementById
 */
var input_nome=$("#nome");

/**
 * Id da div referente ao telefone
 * @type @exp;document@call;getElementById
 */
var input_telefone = $("#phone");

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

/***************************************
 * FUNÇÕES                             *
 * Não alterar nada abaixo desta linha *
 ***************************************/

/**
 * Clear Data
 * Limpa os dados de exibição
 * @returns {undefined}
 */
function cleardata(){
    input_nome.html("");
    input_telefone.html("");
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
    }, 200);
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
        input_nome.html(nomeSorteado);
    } else {
        input_nome.html(nomeSorteado);
        newNumber="";
        for(i=0; i<telefone.length;i++){
            if(i>4 && i<10){
                newNumber += "*";
            } else {
                newNumber += telefone[i];
            }
        }
        input_telefone.html(newNumber);
        blink("resultado");
        times = 100; 
    }
}

/**
 * Banner
 * Função de controle de exibição dos banners
 * @returns {undefined}
 */
function banner(){
    imgbanner="";
    var date = new Date();
    var today = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+(date.getDate());
    switch(today){
        case dataSorteioIphone:
            imgbanner = "banner_iphone.png";
            break;
        case dataSorteioWatch:
            imgbanner = "banner_watch.png";
            break;
        case dataSorteioIpad:
            imgbanner = "banner_ipad.png";
            break;
        default:
            imgbanner = "banner_watch.png";
            break;
    }
    $("#wrapper-banner").html("<img src='img/" + imgbanner + "' class='banner img-responsive' />");
}

