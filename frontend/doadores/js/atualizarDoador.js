let codDoador = document.getElementById('codDoador');
let nomeDoador = document.getElementById('nomeDoador');
let cnpjDoador = document.getElementById('cnpjDoador');
let cpfDoador = document.getElementById('cpfDoador');
let enderecoDoador = document.getElementById('enderecoDoador');
let emailDoador = document.getElementById('emailDoador');
let telefoneDoador = document.getElementById('telefoneDoador');
let situacaoDoador = document.getElementById('situacaoDoador');
let codFuncionario = document.getElementById('codFuncionario');
let atualizarDoador = document.getElementById('atualizarDoador');

codDoador.addEventListener('input', ()=>{
    let codDoador = Number(document.getElementById('codDoador').value);

    fetch(`http://localhost:8080/doador/${codDoador}`)
    .then(resposta => resposta.json())
    .then(dados => {
        nomeDoador.value = dados.nomeDoador;
        cnpjDoador.value = dados.cnpjDoador;
        cpfDoador.value = dados.cpfDoador;
        enderecoDoador.value = dados.enderecoDoador;
        emailDoador.value = dados.emailDoador;
        telefoneDoador.value = dados.telefoneDoador;
        situacaoDoador.value = dados.situacaoDoador;
        codFuncionario.value = dados.codFuncionario;
    })
    .catch((err) => console.error("Erro ao procurar funcionário!", err));
});

atualizarDoador.addEventListener('click', ()=>{
    let codDoador1 = Number(document.getElementById('codDoador').value);
    let nomeDoador = document.getElementById('nomeDoador').value;
    let cnpjDoador = document.getElementById('cnpjDoador').value;
    let cpfDoador = document.getElementById('cpfDoador').value;
    let enderecoDoador = document.getElementById('enderecoDoador').value;
    let emailDoador = document.getElementById('emailDoador').value;
    let telefoneDoador = document.getElementById('telefoneDoador').value;
    let situacaoDoador = document.getElementById('situacaoDoador').value;
    let codFuncionario = document.getElementById('codFuncionario').value;

    const dados = {
        nomeDoador: nomeDoador, 
        cnpjDoador: cnpjDoador, 
        cpfDoador: cpfDoador, 
        enderecoDoador: enderecoDoador, 
        emailDoador: emailDoador,
        telefoneDoador: telefoneDoador,
        situacaoDoador: situacaoDoador,
        codFuncionario: codFuncionario
    }

    fetch(`http://localhost:8080/doador/${codDoador1}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "Doador atualizado com sucesso!";
        codDoador.value = "";
        codFuncionario.value = "";
        nomeDoador.value = "";
        cpfDoador.value = "";
        cnpjDoador.value = "";
        enderecoDoador.value = "";
        emailDoador.value = "";
        telefoneDoador.value = "";
        situacaoDoador.value = "";
        res.style.color = "white";
    })
    .catch((err) => console.error("Falha ao atualizar os dados", err));
});