class Pessoas {
salvar() { // função pra alertar quando fizer o cadastro
  alert('Cadastrado com Sucesso');
  /// ...
}

   FuncaoPrincipal() { // função pra criar o json
    let Pessoas = {}
    
    Pessoas.id = this.id;
    Pessoas.CPF = document.getElementById('CPF').value;
    Pessoas.nome = document.getElementById('nome').value;
    Pessoas.Sobrenome = document.getElementById('Sobrenome').value;
    Pessoas.DataDeNascimento = document.getElementById('data').value;
    Pessoas.Idade = document.getElementById('idade').value;
    Pessoas.ÉMaiorDeIdade = document.getElementById('exampleRadios1').value;
    Pessoas.EMaiorDeIdade = document.getElementById('exampleRadios2').value;
    Pessoas.Vaga = document.getElementById('vaga').value;

    return Pessoas;
    }
    constructor(){
        this.id = 1;
        this.arrayPessoas = [];
        }

CliqueAqui(Pessoas){
    let Pessoa = this.function();
    
    if(this.validaCampos(Pessoas) == true) { // função que da uma olhada se os campos estão corretos ai da um alerta
        alert('salvar')
    }
    if(this.validaCampos(Pessoas)) {
        this.adicionar(Pessoas);
    }
    console.log(this.arrayPessoas);

    
    console.log(Pessoas);
    }
    
    adicionar(Pessoas) { //função que pega o array de pessoas
        this.arrayPessoas.push(Pessoas);
        this.id++;
    }


    validaCampos(Pessoas){   // função que valida os campos
    
    let msg = '';
    
       if(Pessoas.nome == '') {
              msg += '- Informe seu nome \n';
    }
    if(Pessoas.CPF == '') {
              msg += '- Informe seu CPF \n';
    }
    if(Pessoas.Sobrenome == '') {
              msg += '- Informe seu Sobrenome \n';
    }
    if(Pessoas.DataDeNascimento == '') {
              msg += '- Informe sua Data de Nascimento \n';
    }
    if(Pessoas.Idade == '') {
              msg += '- Informe sua Idade \n';
    }
    if(Pessoas.ÉMaiorDeIdade == '') {
              msg += '- Informe se você é maior de Idade ou não \n';
    }
    if(Pessoas.EMaiorDeIdade == '') {
              msg += '- Informe se você é maior de Idade ou não \n';
    }
    if(processo.Vaga == '') {
              msg += '- Informe sua Vaga desejada \n';
}

if(msg != '') {
    alert(msg);
    return false
}
 else {
    return true;

    }

}
}
         

         

  
