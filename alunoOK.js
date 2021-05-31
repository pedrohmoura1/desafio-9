var listaAlunos = [];

function Aluno(RA, Pnome, Snome, Idade, Sexo, DataMatricula){
    this.RA = RA;
    this.Nome = [Pnome,Snome];
    this.Idade = Idade;
    this.Sexo = Sexo;
    this.DataMatricula = DataMatricula;
    this.listaDisciplina = [];

    this.novaDisciplina = function(lista){
        this.listaDisciplina.push(lista);
    }
}

function Matricula(Disciplina,Data){
    var lista = [];
    var posicao = listaAlunos.length-1;
    lista.push(Disciplina);
    lista.push(Data);
    console.log(lista);
    console.log(listaAlunos);

    listaAlunos[posicao].novaDisciplina(lista);
    console.log(listaAlunos);

    list();
    lista = [];
}

function add(){
    var RA = document.getElementById('inputRA').value;
    console.log('ra '+RA);
    var PNome = document.getElementById('inputNome').value;
    var SNome = document.getElementById('inputSobreNome').value;
    var Idade = document.getElementById('inputIdade').value;
    var Sexo = document.getElementById('inputSexo').value;
    var DataMatricula = document.getElementById('inputData').value;
    
    if (Sexo == '0'){
        alert('Preencher a opção Sexo!');
        document.getElementById('exampleModal').innerHTML = '';
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

    listaAlunos.push(new Aluno(RA,PNome,SNome,Idade,Sexo,DataMatricula));
    console.log(listaAlunos);

    list();
}

function addMat(){
    var nomeDisciplina = document.getElementById('inputDisciplina').value;
    var dataDisciplina = document.getElementById('inputDataMatricula').value;
    var Aluno = listaAlunos.length-1;

    Matricula(nomeDisciplina, dataDisciplina);
}

function remove(){
    listaAlunos.pop();
    list();
}

function limpar(){
    listaAlunos = [];
    list();
}

function list(){
    console.log(listaAlunos.length);
    var botao = '<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Matricula">Nova Disciplina</button>';
    var MostraAluno = '<table class="table">';
    var MostraDisciplina = '<table class="table">';

    MostraAluno += '<thead> <tr> <th>RA</th> <th>Nome</th> <th>Sobrenome</th> <th>Idade</th> <th>Sexo</th> <th>DataMatricula</th>  </tr> </thead><tbody>';
    MostraDisciplina += '<thead><tr><th>Disciplina</th><th>Data</th></tr><tbody>';

    for(var row = 0; row< listaAlunos.length; row++){
        console.log('ROW' + row + ': ' + listaAlunos[row]);

        var celula = '';
        celula += '<td>' + listaAlunos[row].RA + '</td>'; 
        celula += '<td>' + listaAlunos[row].Nome[0] + '</td>';
        celula += '<td>' + listaAlunos[row].Nome[1] + '</td>';
        celula += '<td>' + listaAlunos[row].Idade + '</td>';
        celula += '<td>' + listaAlunos[row].Sexo + '</td>';
        celula += '<td>' + listaAlunos[row].DataMatricula + '</td>';
        
        for(var Mrow = 0; Mrow < listaAlunos[row].listaDisciplina.length; Mrow++){
            console.log('MROW' + Mrow + ': ' + listaAlunos[row].listaDisciplina[Mrow]);

            var Mcelula ='';
            for(var Mcol = 0; Mcol<listaAlunos[row].listaDisciplina[Mrow].length; Mcol++){
                console.log('MCOL' + Mcol + ': ' + listaAlunos[row].listaDisciplina[Mrow][Mcol]);

                Mcelula += '<td>' + listaAlunos[row].listaDisciplina[Mrow][Mcol] + '</td>';

            }
            MostraDisciplina += '<tr>' + Mcelula + '</tr>';
        }
        MostraDisciplina += '</tbody></table>';
            
        MostraAluno += '<tr>'+ celula + '</tr>';
        MostraAluno += '<tr><td></td><td></td><td></td><td></td><td></td><td>'+MostraDisciplina+'</td></tr>';
    }
    
    MostraAluno += '</tbody></table>';

    document.getElementById('tabela').innerHTML = MostraAluno;
    document.getElementById('botao').innerHTML =botao;
}