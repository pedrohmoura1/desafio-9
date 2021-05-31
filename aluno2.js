var ListaDado = [];

function  dados(){
 var RA = document.getElementById('inputRA').value;
 console.log('ra '+RA);
 var PNome = document.getElementById('inputNome').value;
 var SNome = document.getElementById('inputSobreNome').value;
 var Idade = document.getElementById('inputIdade').value;
 var Sexo = document.getElementById('inputSexo').value;
 var DataMatricula = document.getElementById('inputData').value;
 var Sexo;

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
    var dado = [];
    dado.push(RA);
    dado.push(PNome);
    dado.push(SNome);
    dado.push(Idade);
    dado.push(Sexo);
    dado.push(DataMatricula);
    console.log('dado = '+dado);
    console.log('Confirma');

    ListaDado.push(dado);
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
    this.RA=ListaDado[0];
    this.Lista_Disciplinas='teste',
    this.Nome=[ListaDado[1],ListaDado[2]];
    this.Idade=ListaDado[3];
    this.Sexo=ListaDado[4];
    this.Data_Matricula=ListaDado[5];
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

function listar1(){
var botao = '<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Matricula">Nova Disciplina</button>'

var accordion = '<div class="accordion" id="accordionExample">';
var TabelaAlunoHTML = '<table class="table">';
TabelaAlunoHTML += '<thead><tr><th>RA</th><th>Nome Completo</th><th>Idade</th><th>Sexo</th><th>Data de Matricula</th></tr></thead><tbody>';

for(var NAccord=0; NAccord < dado.length; NAccord++){
    accordion += '<div class="accordion-item">';
    accordion += '<h2 class="accordion-header" id="heading'+NAccord+'">';
    accordion += '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+NAccord+'" aria-expanded="true" aria-controls="collapse'+NAccord+'">';
    // Montar aqui a linha da tabela aluno
    for( var row_aluno; row_aluno<dado.length; row_aluno++){
        var celula = '<td>';
        //for( var col_aluno = 0; col_aluno < dado[row_aluno].length; col_aluno++){
        //    celula += '<td>' + dado[row_aluno][col_aluno] + '</td>';
        //}
        TabelaAlunoHTML += '<tr>' + celula + '</tr>';
    }
    TabelaAlunoHTML += '</tbody></table>';
    accordion += TabelaAlunoHTML;
    accordion += '</button></h2>';
    accordion += '<div id="collapse'+NAccord+'" class="accordion-collapse collapse" aria-labelledby="heading'+NAccord+'" data-bs-parent="#accordionExample">';
    accordion += '<div class="accordion-body">';
    //Montar aqui a tabela de matricula
    var tabelaMatriculaHTML = '<table class="table">';
    tabelaMatriculaHTML += '<thead><tr><td>Disciplina</td><td>Data</td></tr></thead><tbody>';
    for(row_matricula = 0; row_matricula<Aluno.Lista_Disciplinas.length; row_matricula++){
        var celula2 = '';

        for(var col_matricula = 0; col_matricula<Aluno.Lista_Disciplinas[row_matricula].length; col_matricula++){
            celula2 += '<td>' + Aluno.Lista_Disciplinas[row_matricula][col_matricula] + '</td>';
        }
        tabelaMatriculaHTML += '<tr>' + celula + '</tr>'; 
    }
    tabelaMatriculaHTML += '</tbody></table>';

    accordion += tabelaMatriculaHTML;
    accordion += '</div></div></div>';
}

document.getElementById('tabela').innerHTML = accordion;
document.getElementById('botao').innerHTML =botao;
}

function listar(){
	var cadastrosHTML = '<table class="table">';
	cadastrosHTML += '<thead> <tr> <th>RA</th> <th>Nome</th> <th>Sobrenome</th> <th>Idade</th> <th>Sexo</th><th>DataMatricula</th> <th>Disciplina</th> </tr> </thead>';
    
    for (var row = 0; row < ListaDado.length; row++){
        console.log('ROW' + row + ': ' + ListaDado[row]);
			//console.log('ROW' + row + ': ' + dado[row]);
			
			
			var celula = '<td>'+Aluno.RA + '</td>';
			celula += '<td>'+Aluno.Nome[0] + '</td>';
			celula += '<td>'+Aluno.Nome[1] + '</td>';
			celula += '<td>'+Aluno.Idade + '</td>';
			celula += '<td>'+Aluno.Sexo + '</td>';
			celula += '<td>'+Aluno.Data_Matricula + '</td>';
			celula += '<td>'+Aluno.Lista_Disciplinas + '</td>';

			cadastrosHTML += '<tr>'+ celula + '</tr>';
	
    }				
			cadastrosHTML += '</table>';
	
			document.getElementById('tabela').innerHTML = cadastrosHTML;
	
	}