let apagarDoador = document.getElementById('apagarDoador');
let res = document.getElementById('res');

apagarDoador.addEventListener('click', ()=>{
    let codDoador = Number(document.getElementById('codDoador').value);

    fetch(`http://localhost:8080/doador/${codDoador}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then(resposta => resposta.text())
    .then(dados => {
        res.innerHTML = "Doador apagado com sucesso!";
        res.style.color = "white";
    })
    .catch((err) => console.error("Falha ao apagar Doador!", err));
});