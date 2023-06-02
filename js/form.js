var addPacienteButton = document.querySelector("#adicionar-paciente");

addPacienteButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = formPaciente(form);

    var erros = pacienteValido(paciente);
    console.log(erros);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);

        return
    }

    adicionaPaciente(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function adicionaPaciente(paciente) {
    var pacienteTr = criaTr(paciente);
    var tbody = document.querySelector("#tabela-pacientes")
    tbody.appendChild(pacienteTr);
}

function formPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function pacienteValido(paciente) {

    var erros = [];

    if(!pesoValido(paciente.peso)) erros.push("Peso é inválido!")
    
    if(!alturaValida(paciente.altura)) erros.push("Altura é inválida!")

    if(paciente.nome.length == 0) erros.push("O nome está em branco!")

    if(paciente.peso.length == 0) erros.push("O peso está em branco!")

    if(paciente.altura.length == 0) erros.push("A altura está em branco!")

    if(paciente.gordura.length == 0) erros.push("A gordura está em branco!")

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul =  document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    })
}
