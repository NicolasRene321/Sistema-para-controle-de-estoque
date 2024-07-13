let listar = document.getElementById('listar');
let res = document.getElementById('res');

listar.addEventListener('click', ()=>{
    fetch(`http://localhost:8080/produto`)
    .then(resposta => resposta.json())
    .then(dados => {

        res.innerHTML = "<ul>"
        dados.forEach(dado => {
            res.innerHTML += "<hr>";
            res.innerHTML += "<li> ID: " + dado.codProduto + "<br>"
            res.innerHTML += "<li> Nome: " +  dado.nomeProduto + "<br>"
            res.innerHTML += "<li> Quantidade: " +  dado.quantidadeProduto + "<br>"
            res.innerHTML += "<li> Descrição: " +  dado.descricaoProduto + "<br>"
            res.innerHTML += "<li> Validade: " +  dado.validadeProduto + "<br>"
            res.innerHTML += "<li> Valor: " +  dado.valorProduto + "<br>"
            res.innerHTML += "<li> Doador ID: " +  dado.doadorId + "<br>"
            res.innerHTML += "<li> Estoque ID: " +  dado.estoqueId + "<br>"
            res.innerHTML += "<li> Fabricante ID: " +  dado.fabricanteId + "<br>"
            res.innerHTML += "<li> Funcionário ID: " +  dado.funcionarioId + "<br>"    
        });
        res.innerHTML += "</ul>"
        res.style.textAlign = "left";
        res.style.padding = "12px"
        res.style.border = "3px solid black";
        res.style.color = "rgb(240, 242, 243)";
        
    })
    .catch((err) => console.error("Falha ao buscar produto!", err))
});
