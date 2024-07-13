let res = document.getElementById('res');
let cadastrarEntrega = document.getElementById('cadastrarEntrega');

cadastrarEntrega.addEventListener('click', ()=> {
    let dataEntrega = document.getElementById('dataEntrega').value;
    let nomeProdutoEntrega = document.getElementById('nomeProdutoEntrega').value;
    let quantidadeEntrega = Number(document.getElementById('quantidadeEntrega').value);
    let responsavelEntrega = document.getElementById('responsavelEntrega').value;
    let estoqueId = Number(document.getElementById('estoqueId').value);
    let funcionarioId = Number(document.getElementById('funcionarioId').value);

    const dados = {
        dataEntrega: dataEntrega,
        nomeProdutoEntrega: nomeProdutoEntrega,
        quantidadeEntrega: quantidadeEntrega,
        responsavelEntrega: responsavelEntrega,
        estoqueId: estoqueId,
        funcionarioId: funcionarioId      
    }

    fetch('http://localhost:8080/entrega', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "Entrega cadastrada com sucesso!";
        res.style.color = "white";
    })
    .catch((err) => console.error("Falha ao cadastrar entrega!", err));
});