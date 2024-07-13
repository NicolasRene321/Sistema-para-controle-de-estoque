let atualizarFuncionario = document.getElementById('atualizarFuncionario');
let idFuncionario1 = document.getElementById('idFuncionario');
let cargoFuncionario1 = document.getElementById('cargoFuncionario');
let cpfFuncionario1 = document.getElementById('cpfFuncionario');
let nomeFuncionario1 = document.getElementById('nomeFuncionario');
let situacaoFuncionario1 = document.getElementById('situacaoFuncionario');
let telefoneFuncionario1 = document.getElementById('telefoneFuncionario');
let res = document.getElementById('res');

idFuncionario1.addEventListener('input', ()=>{
    let idFuncionario = Number(document.getElementById('idFuncionario').value);

    fetch(`http://localhost:8080/funcionario/${idFuncionario}`)
    .then(resposta => resposta.json())
    .then(dados => {
        cargoFuncionario1.value = dados.cargoFuncionario;
        cpfFuncionario1.value = dados.cpfFuncionario;
        nomeFuncionario1.value = dados.nomeFuncionario;
        situacaoFuncionario1.value = dados.situacaoFuncionario;
        telefoneFuncionario1.value = dados.telefoneFuncionario;
    })
    .catch((err) => console.error("Erro ao procurar funcionário!", err));
});

atualizarFuncionario.addEventListener('click', ()=>{
    let idFuncionario = Number(document.getElementById('idFuncionario').value);
    let cargoFuncionario = document.getElementById('cargoFuncionario').value;
    let cpfFuncionario = document.getElementById('cpfFuncionario').value;
    let nomeFuncionario = document.getElementById('nomeFuncionario').value;
    let situacaoFuncionario = document.getElementById('situacaoFuncionario').value;
    let telefoneFuncionario = document.getElementById('telefoneFuncionario').value;

    const dados = {
        cargoFuncionario: cargoFuncionario, 
        cpfFuncionario: cpfFuncionario, 
        nomeFuncionario: nomeFuncionario, 
        situacaoFuncionario: situacaoFuncionario, 
        telefoneFuncionario: telefoneFuncionario
    }

    fetch(`http://localhost:8080/funcionario/${idFuncionario}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = "Funcionário atualizado com sucesso!";
        idFuncionario1.value = "";
        cargoFuncionario1.value = "";
        cpfFuncionario1.value = "";
        nomeFuncionario1.value = "";
        situacaoFuncionario1.value = "";
        telefoneFuncionario1.value = "";
        res.style.color = "white";
    })
    .catch((err) => console.error("Falha ao atualizar os dados", err));
});