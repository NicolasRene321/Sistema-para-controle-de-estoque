let res = document.getElementById('res');
let cadastrarDoador = document.getElementById('cadastrarDoador');

cadastrarDoador.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value;
    let cnpj = document.getElementById('cnpj').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let situacao = document.getElementById('situacao').value;
    let codFuncionario = Number(document.getElementById('codFuncionario').value);

    const dados = {
        nomeDoador: nome,
        cnpjDoador: cnpj,
        cpfDoador: cpf,
        enderecoDoador: endereco,
        emailDoador: email,
        telefoneDoador: telefone,
        situacaoDoador: situacao,
        codFuncionario: codFuncionario
    }

    fetch('http://localhost:8080/doador', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "Doador cadastrado com sucesso!"
        res.style.color = "white";
    })
    .catch((err) => console.error("Erro ao cadastrar doador!", err));
});