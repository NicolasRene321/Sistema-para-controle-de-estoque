let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')
let listar = document.getElementById('listar')
let buscar = document.getElementById('buscar')
let atualizar = document.getElementById('atualizar')
let deletar = document.getElementById('deletar')


// Cadastrar -----------------------------------------------------

cadastrar.addEventListener('click', ()=>{
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeProduto = Number(document.getElementById('quantidadeProduto').value)
    let valorProduto = Number(document.getElementById('valorProduto').value)
    let descricaoProduto = document.getElementById('descricaoProduto').value
    let validadeProduto = document.getElementById('validadeProduto').value
    let doadorId = Number(document.getElementById('doadorId').value)
    let estoqueId = Number(document.getElementById('estoqueId').value)
    let fabricanteId = Number(document.getElementById('fabricanteId').value)
    let funcionarioId = Number(document.getElementById('funcionarioId').value)
    
    console.log(validadeProduto);
    
    const dados = {
        nomeProduto: nomeProduto,
        quantidadeProduto: quantidadeProduto,
        descricaoProduto: descricaoProduto,
        validadeProduto: validadeProduto,
        doadorId: doadorId,
        estoqueId, estoqueId,
        fabricanteId: fabricanteId,
        funcionarioId: funcionarioId,
        valorProduto: valorProduto
    }


    fetch('http://localhost:8080/produto', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "Produto cadastrado com sucesso! <br><br>"
        res.innerHTML += "Código: " + dados.codProduto + "<br>"
        res.innerHTML += "Nome: " +  dados.nomeProduto + "<br>"
        res.innerHTML += "Quantidade: " +  dados.quantidadeProduto + "<br>"
        res.innerHTML += "Descrição: " +  dados.descricaoProduto + "<br>"
        res.innerHTML += "Validade: " +  dados.validadeProduto + "<br>"
        res.innerHTML += "Valor: " +  dados.valorProduto + "<br>"
        res.innerHTML += "Doador ID: " +  dados.doadorId + "<br>"
        res.innerHTML += "Estoque ID: " +  dados.estoqueId + "<br>"
        res.innerHTML += "Fabricante ID: " +  dados.fabricanteId + "<br>"
        res.innerHTML += "Funcionário ID: " +  dados.funcionarioId + "<br>"

        res.style.textAlign = "left";
        res.style.padding = "12px"
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
    })
    .catch((err) => console.error("Erro ao tentar cadastrar produto!", err))
});