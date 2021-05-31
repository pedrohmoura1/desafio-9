var dado = [];

function  dados(){
 var RA = document.getElementById('inputRA').value;
 console.log('ra '+RA);
 var PNome = document.getElementById('inputNome').value;
 var SNome = document.getElementById('inputSobreNome').value;
 var Idade = document.getElementById('inputIdade').value;
 var Sexo = document.getElementById('inputSexo').value;
 var DataMatricula = document.getElementById('inputData').value;
 

 if (Sexo == '0'){
    alert('Preencher a opção Sexo!');
    document.getElementById('btnSalvar1').innerHTML = '';
    return;
}
    var texto = '<ul class="list-group">';
    texto += '<li class="list-group-item"> RA: '+RA+'</li>';
    texto += '<li class="list-group-item"> Nome Completo: '+PNome+' '+SNome+'</li>';
    texto += '<li class="list-group-item"> Idade: '+Idade+' Anos </li>';
    texto += '<li class="list-group-item"> Sexo: '+Sexo+'</li>';
    texto += '<li class="list-group-item"> Data de Matricula: '+DataMatricula+'</li>';
    texto += '</ul>';

    document.getElementById('ConteudoModal').innerHTML = texto
    dado.push(RA);
    dado.push(PNome);
    dado.push(SNome);
    dado.push(Idade);
    dado.push(Sexo);
    dado.push(DataMatricula);
    console.log('dado = '+dado);
    console.log('Confirma');
}

var Aluno = {
RA : '',
Nome : '',
Idade :'',
Sexo: '',
Data_Matricula: '',
Lista_Disciplinas : [
],

Novo(){
    this.RA=dado[0];
    this.Nome=[dado[1],dado[2]];
    this.Idade=dado[3];
    this.Sexo=dado[4];
    this.Data_Matricula=dado[5];
 console.log('cadastrado com sucesso!'); 
 listar();  
},

Matricula(){
    var disciplina = [];
    var nomeDisciplina = document.getElementById('inputDisciplina').value;
    var dataDisciplina = document.getElementById('inputDataMatricula').value;

    disciplina.push(nomeDisciplina);
    disciplina.push(dataDisciplina);

    Aluno.Lista_Disciplinas.push(disciplina);
    listar();
}

};

function listar(){
var botao = '<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Matricula">Nova Disciplina</button>'
var tabelaHTML = '<table class="table">';
tabelaHTML +='<thead><tr><th>RA</th><th>Nome Completo</th><th>Idade</th><th>Sexo</th><th>Data de Matricula</th></tr></thead><tbody>';
tabelaHTML +='<tr><td>'+Aluno.RA+'</td><td>'+Aluno.Nome[0]+' '+Aluno.Nome[1]+'</td><td>'+Aluno.Idade+'</td><td>'+Aluno.Sexo+'</td><td>'+Aluno.Data_Matricula+'</td><tr>'
var listaHTML = '<table class="table">';
listaHTML += '<thead><tr><td>Disciplina</td><td>Data</td></tr></thead><tbody>'
for (var row = 0; row < Aluno.Lista_Disciplinas.length; row++) {
    console.log('ROW' + row + ': ' + Aluno.Lista_Disciplinas[row]);
    var celula = '';

    for (var col = 0; col < Aluno.Lista_Disciplinas[row].length; col++) {
    console.log('col' + col + ':' + Aluno.Lista_Disciplinas[row][col])	
        celula += '<td>' + Aluno.Lista_Disciplinas[row][col] + '</td>';
    }
    listaHTML += '<tr>' + celula + '</tr>'; 
}
listaHTML += '</tbody></table>';
tabelaHTML += '<tr><td></td><td></td><td></td><td></td><td>'+listaHTML+'</td></tr></tbody>';
tabelaHTML += '</table>';
document.getElementById('tabela').innerHTML = tabelaHTML;
document.getElementById('botao').innerHTML =botao;
}