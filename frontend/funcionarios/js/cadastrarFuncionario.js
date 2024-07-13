let res = document.getElementById('res');
let cadastrar = document.getElementById('cadastrar');

cadastrar.addEventListener('click', ()=>{
    const situacao = document.getElementById('situacao').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const cargo = document.getElementById('cargo').value;
    const nome = document.getElementById('nome').value;

    const dados = {
        nomeFuncionario: nome,
        cpfFuncionario: cpf,
        telefoneFuncionario: telefone,
        cargoFuncionario: cargo,
        situacaoFuncionario: situacao
    }

    fetch('http://localhost:8080/funcionario', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resultado => resultado.json())
    .then(valores => {
        res.innerHTML = "Funcionário cadastrado com sucesso! <br><br>"
        res.innerHTML += "Código: " + valores.codFuncionario + "<br>";
        res.innerHTML += "Nome: " + valores.nomeFuncionario + "<br>"; 
        res.innerHTML += "CPF: " + valores.cpfFuncionario + "<br>";
        res.innerHTML += "Telefone: " + valores.telefoneFuncionario + "<br>";
        res.innerHTML += "Cargo: " + valores.cargoFuncionario + "<br>";
        res.innerHTML += "Situação: " + valores.situacaoFuncionario + "<br>";
        res.style.textAlign = "left";
        res.style.padding = "12px"
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao cadastrar funcionário!", err))
      
});