let cadastrar = document.getElementById('cadastrar');
let res = document.getElementById('res');

cadastrar.addEventListener('click', ()=>{
    let nomeFabricante = document.getElementById('nomeFabricante').value;
    let codFuncionario = Number(document.getElementById('codFuncionario').value);

    const dados = {
        nomeFabricante: nomeFabricante,
        codFuncionario: codFuncionario 
    }

    fetch('http://localhost:8080/fabricante', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "Fabricante cadastrado com sucesso! <br><br>";
        res.innerHTML += "Fabricante ID: " + dados.codFabricante + "<br>";
        res.innerHTML += "Nome: " + dados.nomeFabricante + "<br>";
        res.innerHTML += "Funcionário ID: " + dados.codFuncionario;

        res.style.textAlign = "left";
        res.style.padding = "12px"
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Falha ao cadastrar o fabricante", err));

});