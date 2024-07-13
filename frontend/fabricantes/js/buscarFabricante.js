let buscarFabricante = document.getElementById('buscarFabricante');
let listarFabricantes = document.getElementById('listarFabricantes');
let res = document.getElementById('res');

buscarFabricante.addEventListener('click', ()=>{
    let codFabricante = Number(document.getElementById('codFabricante').value);

    fetch(`http://localhost:8080/fabricante/${codFabricante}`)
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>"
        res.innerHTML += "<li> ID: " + dados.codFabricante;
        res.innerHTML += "<li> Nome: " + dados.nomeFabricante;
        res.innerHTML += "<li> ID do Funcionário: " + dados.codFuncionario;
        res.innerHTML += "</ul>"
        res.style.textAlign = "left";
        res.style.padding = "12px";
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao procurar fabricante!", err));
});

listarFabricantes.addEventListener("click", ()=>{
    fetch("http://localhost:8080/fabricante")
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>"
        dados.forEach(fabricante => {
            res.innerHTML += "<hr>";
            res.innerHTML += "<li> ID: " + fabricante.codFabricante;
            res.innerHTML += "<li> Nome: " + fabricante.nomeFabricante;
            res.innerHTML += "<li> ID do Funcionário: " + fabricante.codFuncionario;
        });
        res.innerHTML += "</ul>";
        res.style.textAlign = "left";
        res.style.padding = "12px"
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao listar fabricantes!", err));
});