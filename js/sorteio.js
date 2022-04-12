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
var input_nome = $('#nome');

/**
 * Id da div referente ao telefone
 * @type @exp;document@call;getElementById
 */
var input_area = $('#area');

/**
 * Fields
 * Quantidade de letras no display
 * @type Number
 */
var fields = 30; //letras

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
function cleardata() {
  input_nome.html('');
  input_area.html('');
}

/**
 * Blink
 * Função para "piscar" o resultado final
 * @param {string} div
 * @returns void
 */
function blink(div) {
  d = document.getElementById(div);
  piscar = 0;
  var interval = setInterval(function() {
    if (piscar < 7) {
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
function sorteio() {
  cleardata();
  var indice = Math.floor(Math.random() * objParticipantes.length);
  var nome = objParticipantes[indice].nome;
  var area = objParticipantes[indice].area;
  var nomeSorteado = '';

  if (nome.length < fields) {
    var diff = fields - nome.length;
    for (i = 0; i < diff; i++) {
      nome += ' ';
    }
  } else {
    nome = nome.substring(0, fields);
  }

  for (i = 0; i < nome.length; i++) {
    nomeSorteado += "<span class='quad nome'>" + nome[i] + '</span>';
  }

  if (times > 0) {
    newindice = Math.floor(Math.random() * objParticipantes.length);
    setTimeout('sorteio(objParticipantes[newindice])', 10);
    times--;
    input_nome.html(nomeSorteado);
  } else {
    input_nome.html(nomeSorteado);
    newNumber = '';
    for (i = 0; i < area.length; i++) {
      newNumber += area[i];
    }
    input_area.html(newNumber);
    blink('resultado');
    times = 100;
  }
}
