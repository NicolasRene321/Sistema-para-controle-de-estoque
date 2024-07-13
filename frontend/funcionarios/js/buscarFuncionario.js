let buscarFuncionario = document.getElementById("buscarFuncionario");
let listarFuncionarios = document.getElementById("listarFuncionarios");
let res = document.getElementById("res");

buscarFuncionario.addEventListener('click', ()=>{
    let idFuncionario = Number(document.getElementById('idFuncionario').value);

    fetch(`http://localhost:8080/funcionario/${idFuncionario}`)
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>"
        res.innerHTML += "<li> ID: " + dados.codFuncionario;
        res.innerHTML += "<li> Cargo: " + dados.cargoFuncionario;
        res.innerHTML += "<li> CPF: " + dados.cpfFuncionario;
        res.innerHTML += "<li> Nome: " + dados.nomeFuncionario;
        res.innerHTML += "<li> Situação: " + dados.situacaoFuncionario;
        res.innerHTML += "<li> Telefone: " + dados.telefoneFuncionario;
        res.innerHTML += "</ul>"

        res.style.textAlign = "left";
        res.style.padding = "12px";
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao procurar funcionário!", err))
});

listarFuncionarios.addEventListener("click", ()=>{
    fetch("http://localhost:8080/funcionario")
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>"
        dados.forEach(funcionario => {
            res.innerHTML += "<hr>";
            res.innerHTML += "<li> ID: " + funcionario.codFuncionario;
            res.innerHTML += "<li> Cargo: " + funcionario.cargoFuncionario;
            res.innerHTML += "<li> CPF: " + funcionario.cpfFuncionario;
            res.innerHTML += "<li> Nome: " + funcionario.nomeFuncionario;
            res.innerHTML += "<li> Situação: " + funcionario.situacaoFuncionario;
            res.innerHTML += "<li> Telefone: " + funcionario.telefoneFuncionario + "<br><br>";
        });
        res.innerHTML += "</ul>";
        res.style.textAlign = "left";
        res.style.padding = "12px"
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao listar funcionários!", err));
});