let apagarFabricante = document.getElementById('apagarFabricante');
let res = document.getElementById('res');

apagarFabricante.addEventListener('click', ()=>{
    let idFabricante = Number(document.getElementById('idFabricante').value);

    fetch(`http://localhost:8080/fabricante/${idFabricante}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then(resposta => resposta.text())
    .then(dados => {
        res.innerHTML = "Fabricante apagado com sucesso!";
        res.style.color = "white";
    })
    .catch((err) => console.error("Falha ao apagar fabricante!", err));
});