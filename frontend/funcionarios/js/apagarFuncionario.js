let deleteEmployee = document.getElementById('deleteEmployee');
let res = document.getElementById('res');


deleteEmployee.addEventListener('click', ()=>{
    let idEmployee = Number(document.getElementById('idEmployee').value);

    fetch(`http://localhost:8080/funcionario/${idEmployee}`,{
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then(resposta => resposta.text())
    .then(dados => {
        res.innerHTML = "Funcionário apagado com sucesso!";
        res.style.color = "white";
    })
    .catch((err) => console.error("Erro ao apagar o funcionário!", err));
});


