let buscarDoador = document.getElementById('buscarDoador');
let listarDoadores = document.getElementById('listarDoadores');
let res = document.getElementById('res');

buscarDoador.addEventListener('click', ()=>{
    let codDoador = Number(document.getElementById('codDoador').value);

    fetch(`http://localhost:8080/doador/${codDoador}`)
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>"
        res.innerHTML += "<li> ID: " + dados.codDoador;
        res.innerHTML += "<li> Nome: " + dados.nomeDoador;
        res.innerHTML += "<li> ID do Funcionário: " + dados.codFuncionario;
        res.innerHTML += "<li> CNPJ: " + dados.cnpjDoador;
        res.innerHTML += "<li> CPF: " + dados.cpfDoador;
        res.innerHTML += "<li> Endereço: " + dados.enderecoDoador;
        res.innerHTML += "<li> Email: " + dados.emailDoador;
        res.innerHTML += "<li> Telefone: " + dados.telefoneDoador;
        res.innerHTML += "<li> Situação: " + dados.situacaoDoador;
        res.innerHTML += "<li> Código do Funcionário: " + dados.codFuncionario;
        res.innerHTML += "</ul>"

        res.style.textAlign = "left";
        res.style.padding = "12px";
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao procurar fabricante!", err));
});

listarDoadores.addEventListener("click", ()=>{
    fetch("http://localhost:8080/doador")
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>"
        dados.forEach(doador => {
            res.innerHTML += "<hr>";
            res.innerHTML += "<li> ID: " + doador.codDoador;
            res.innerHTML += "<li> Nome: " + doador.nomeDoador;
            res.innerHTML += "<li> ID do Funcionário: " + doador.codFuncionario;
            res.innerHTML += "<li> CNPJ: " + doador.cnpjDoador;
            res.innerHTML += "<li> CPF: " + doador.cpfDoador;
            res.innerHTML += "<li> Endereço: " + doador.enderecoDoador;
            res.innerHTML += "<li> Email: " + doador.emailDoador;
            res.innerHTML += "<li> Telefone: " + doador.telefoneDoador;
            res.innerHTML += "<li> Situação: " + doador.situacaoDoador;
            res.innerHTML += "<li> Código do Funcionário: " + doador.codFuncionario;
        });
            res.innerHTML += "</ul>";
            res.style.textAlign = "left";
            res.style.padding = "12px"
            res.style.border = "3px solid black";
            res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao listar fabricantes!", err));
});