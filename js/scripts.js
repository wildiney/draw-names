/**
 * CONTADOR REGRESSIVO E REDIRECIONAMENTO
 */

/**
 * @type Number
 */
var tempo = 5;

/**
 * @type String
 */
var redirecto = "/sorteio-ciab-v2/public_html/index.html";

/**
 * @returns {void}
 */
function countdown() {
    if (tempo > 0) {
        setTimeout("countdown()", 1000);
        tempo--;
        document.getElementById("segundos").innerText = tempo;
    } else {
        window.location.href = redirecto;
    }
}


/**
 * Load and execute
 */
$(document).ready(function () {
    $("#area-outros").hide();
    $("#setores-outros-input").hide();
    
    $("#area").on("change", function(){
        if($("#area").val()==="Outros"){
            $("#area-outros").show();
        } else {
            $("#area-outros").hide();
        }
    });
    
    $("#setores-outros-checkbox").on("click", function(){
        if($("#setores-outros-checkbox").prop('checked') === true){
            $("#setores-outros-input").show();
        } else{
            $("#setores-outros-input").hide();
        }
    });
    
    
    // Máscaras
    $("#telefone").mask("(99) 99999-9999");
   
});

