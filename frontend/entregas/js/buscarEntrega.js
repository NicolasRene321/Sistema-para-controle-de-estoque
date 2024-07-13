let res = document.getElementById('res');
let buscarEntrega = document.getElementById('buscarEntrega');
let listarEntregas = document.getElementById('listarEntregas');

buscarEntrega.addEventListener('click', ()=>{
    let codEntrega = Number(document.getElementById('codEntrega').value);

    fetch(`http://localhost:8080/entrega/${codEntrega}`)
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>";
        res.innerHTML += "<li> Data da entrega: " + dados.dataEntrega;
        res.innerHTML += "<li> Nome do produto: " + dados.nomeProdutoEntrega;
        res.innerHTML += "<li> Quantidade: " + dados.quantidadeEntrega;
        res.innerHTML += "<li> Responsável: " + dados.responsavelEntrega;
        res.innerHTML += "<li> ID do estoque: " + dados.estoqueId;
        res.innerHTML += "<li> ID do funcionário: " + dados.funcionarioId;
        res.innerHTML += "</ul>";

        res.style.textAlign = "left";
        res.style.padding = "12px";
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Falha ao buscar entrega!", err));
});

listarEntregas.addEventListener('click', ()=> {
    fetch('http://localhost:8080/entrega')
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "<ul>";
        dados.forEach(dado => {
            res.innerHTML += "<hr class='linha'><li> Data da entrega: " + dado.dataEntrega;
            res.innerHTML += "<li> Nome do produto: " + dado.nomeProdutoEntrega;
            res.innerHTML += "<li> Quantidade: " + dado.quantidadeEntrega;
            res.innerHTML += "<li> Responsável: " + dado.responsavelEntrega;
            res.innerHTML += "<li> ID do estoque: " + dado.estoqueId;
            res.innerHTML += "<li> ID do funcionário: " + dado.funcionarioId;
        });
        res.innerHTML += "</ul>";
        res.style.textAlign = "left";
        res.style.padding = "12px";
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Falha ao listar entregas!", err));
});