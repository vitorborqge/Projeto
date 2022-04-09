class Pessoas {

    salvar(){
        alert('Cadastrado com Sucesso');
        /// ...
        let pessoas = this.FuncaoPrincipal();
        console.log(pessoas)
      }
       FuncaoPrincipal() { // função pra criar o json
        let pessoas = {}
        
        pessoas.id = this.id;
        pessoas.CPF = document.getElementById('CPF').value;
        pessoas.nome = document.getElementById('nome').value;
        pessoas.Sobrenome = document.getElementById('Sobrenome').value;
        pessoas.DataDeNascimento = document.getElementById('data').value;
        pessoas.Idade = document.getElementById('idade').value;
        pessoas.ÉMaiorDeIdade = document.getElementById('exampleRadios1').value;
        pessoas.EMaiorDeIdade = document.getElementById('exampleRadios2').value;
        pessoas.Vaga = document.getElementById('vaga').value;
    
        return pessoas;
        }
        constructor(){
            this.id = 1;
            this.arrayPessoas = [];
            }
    
    CliqueAqui(pessoas){
        let Pessoa = this.function();
        
        if(this.validaCampos(pessoas) == true) { // função que da uma olhada se os campos estão corretos ai da um alerta
            alert('salvar')
        }
        if(this.validaCampos(pessoas)) {
            this.adicionar(pessoas);
        }
        console.log(this.arrayPessoas);
        }
        
        adicionar(pessoas) { //função que pega o array de pessoas
            this.arrayPessoas.push(Pessoas);
            this.id++;
        }
    
    
        validaCampos(pessoas){   // função que valida os campos
        
        let msg = '';
        
        if(pessoas.nome == '') {
                  msg += '- Informe seu nome \n';
        }
        if(pessoas.CPF == '') {
                  msg += '- Informe seu CPF \n';
        }
        if(pessoas.Sobrenome == '') {
                  msg += '- Informe seu Sobrenome \n';
        }
        if(pessoas.DataDeNascimento == '') {
                  msg += '- Informe sua Data de Nascimento \n';
        }
        if(pessoas.Idade == '') {
                  msg += '- Informe sua Idade \n';
        }
        if(pessoas.ÉMaiorDeIdade == '') {
                  msg += '- Informe se você é maior de Idade ou não \n';
        }
        if(pessoas.EMaiorDeIdade == '') {
                  msg += '- Informe se você é maior de Idade ou não \n';
        }
        if(pessoas.Vaga == '') {
                  msg += '- Informe sua Vaga desejada \n';
    }
    
    if(msg != '') {
        alert(msg);
        return false
    
        }
    
    }
    }
    
    var pessoas = new Pessoas();

  
