let atualizarFabricante = document.getElementById('atualizarFabricante');
let idFabricante1 = document.getElementById('idFabricante');
let nomeFabricante1 = document.getElementById('nomeFabricante');
let idFuncionario1 = document.getElementById('idFuncionario');
let res = document.getElementById('res');

idFabricante1.addEventListener('input', ()=>{
    let idFabricante = Number(document.getElementById('idFabricante').value);

    fetch(`http://localhost:8080/fabricante/${idFabricante}`)
    .then(resposta => resposta.json())
    .then(dados => {
        nomeFabricante1.value = dados.nomeFabricante;
        idFuncionario1.value = dados.codFuncionario;
        
    })
    .catch((err) => console.error("Erro ao procurar fabricante!", err))
});

atualizarFabricante.addEventListener('click', ()=>{
    let idFabricante = Number(document.getElementById('idFabricante').value);
    let nomeFabricante = document.getElementById('nomeFabricante').value;
    let idFuncionario = Number(document.getElementById('idFuncionario').value);

    const dados = {
        nomeFabricante: nomeFabricante,
        idFuncionario: idFuncionario      
    }

    fetch(`http://localhost:8080/fabricante/${idFabricante}`,{
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados) 
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "Fabricante atualizado com sucesso!";
        idFabricante1.value = "";
        nomeFabricante1.value = "";
        idFuncionario1.value = "";
    })
    .catch((err) => console.error("Falha ao atualizar fabricante", err));
});