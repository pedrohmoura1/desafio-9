// FUNCAO PARA ADICIONAR UM NOVO CONTATO
// DEFINICAO DE UM ARRAY GLOBAL
// PARA ELE SEJA UNICO EM TODA A APLICACAO

var listaContatos = [];


function add() {
  // Preciso definir um OBJETO "contato" como sendo
  // LOCAL - e nao GLOBAL.

  // objeto CONTATO possui duas propriedades:
  // nome e celular
  var contato = {
    nome: '',
    celular: '',
  }; // objeto contato

  var vNome = document.getElementById('inputNome').value;
  var vCelular = document.getElementById('inputFone').value;

  contato.nome = vNome;
  contato.celular = vCelular;

  console.log(contato);

  listaContatos.push(contato); // passo objeto CONTATO
  // como parametro ao metodo push do meu arrray
  console.log(listaContatos);
}

function remove() {
  listaContatos.pop();
  console.log('Último objeto foi removido!');
}

function limpar() {
  // limpar o array listaContatos
  listaContatos = [];
}

function list() {
  // listar elementos do array
  var lista = '<ul>';

  for (i = 0; i < listaContatos.length; i++) {
    lista +=
      '<li>' +
      listaContatos[i].nome +
      ' - ' +
      listaContatos[i].celular +
      '</li>';
  }

  lista += '</ul>';

  document.getElementById('lista').innerHTML = '<br>' + lista;
}