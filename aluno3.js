var listaAlunos = [];
var listaTemporaria = [];
function add(vRA,vNome,vIdade,vSexo,vDataMatricula,op1){

    var aluno = {
       RA: '',
       Nome: [],
       Idade:'',
       Sexo: '',
       DataMatricula: '',
       ListaDisciplina:[],
       disciplina: [],

        matricula(){
            
            var nomeDisciplina = document.getElementById('inputDisciplina').value;
            var dataDisciplina = document.getElementById('inputDataMatricula').value;
        
            this.disciplina.push(nomeDisciplina);
            this.disciplina.push(dataDisciplina);
        
            this.ListaDisciplina.push(this.disciplina);
        }
        
    };
     
    if(op1 == 'mat'){
        aluno.matricula();
    }

    aluno.RA = vRA;
    aluno.Nome = vNome;
    aluno.Idade = vIdade;
    aluno.Sexo = vSexo;
    aluno.DataMatricula = vDataMatricula;
    aluno.ListaDisciplina.push(aluno.disciplina);

    listaTemporaria.push(aluno);
    console.log(listaAlunos);
    console.log(listaTemporaria);

}

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
    console.log('Confirma');
    add(RA, [PNome,SNome], Idade, Sexo, DataMatricula,[]);
    console.log('chamou add');
    list('temp');
}

function remove(){
    listaAlunos.pop();
    console.log('ultimo cadastro removido');
    console.log(listaAlunos);
}

function removeTemp(){
    listaTemporaria = [];
    console.log(listaTemporaria);
}

function list(op){
    console.log(op);
    console.log(listaTemporaria.length);
    var botao = '<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Matricula">Nova Disciplina</button>';
	var cadastrosHTML = '<table class="table">';
    var tabelaDisciplina = cadastrosHTML;
    tabelaDisciplina += '<thead><tr><th>Disciplina</th><th>Data</th></tr><tbody>';
	cadastrosHTML += '<thead> <tr> <th>RA</th> <th>Nome</th> <th>Sobrenome</th> <th>Idade</th> <th>Sexo</th> <th>DataMatricula</th> <th>Disciplinas</th> </tr> </thead><tbody>';
    if(op == 'temp'){
        for (var row = 0; row < listaTemporaria.length; row++){
            console.log('ROW' + row + ': ' + listaTemporaria[row]);

            var celula='';
            celula += '<td>' + listaTemporaria[row].RA + '</td>'; 
            celula += '<td>' + listaTemporaria[row].Nome[0] + '</td>';
            celula += '<td>' + listaTemporaria[row].Nome[1] + '</td>';
            celula += '<td>' + listaTemporaria[row].Idade + '</td>';
            celula += '<td>' + listaTemporaria[row].Sexo + '</td>';
            celula += '<td>' + listaTemporaria[row].DataMatricula + '</td>';
            

            for(var Drow = 0; Drow < listaTemporaria[row].ListaDisciplina.length; Drow ++){
                var Dcelula = '';

                for (var Dcol = 0; Dcol < listaTemporaria[row].ListaDisciplina[Drow].length; Dcol++){
                  Dcelula += '<td>' +  listaTemporaria[row].ListaDisciplina[Drow][Dcol] + '</td>'; 
                  console.log('disciplina' + listaTemporaria[row].ListaDisciplina[Drow].length );
                }
                tabelaDisciplina += '<tr>'+Dcelula+'</tr>';
            }
            tabelaDisciplina += '</tbody></table>';
            celula += '<tr><td></td><td></td><td></td><td></td><td>'+tabelaDisciplina+'</td></tr></tbody>';
        
        }
    }
    cadastrosHTML += '<tr>'+ celula + '</tr>';				
	cadastrosHTML += '</tbody></table>';
	
	document.getElementById('tabela').innerHTML = cadastrosHTML;
    document.getElementById('botao').innerHTML =botao;
	
}