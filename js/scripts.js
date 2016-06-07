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
    $("#telefone").mask("(99) 9999-9999");
});

