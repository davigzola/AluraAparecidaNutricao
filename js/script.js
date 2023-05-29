var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    
    var pesoPaciente = tdPeso.textContent;
    var alturaPaciente = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    var tdIMC = paciente.querySelector(".info-imc")

    if (pesoPaciente <= 20 || pesoPaciente >= 800) {
        tdIMC.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
        pesoValido = false;
    }

    if (alturaPaciente <= 1.00 || alturaPaciente >= 3.00) {
        tdIMC.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")
        alturaValida = false;
    }

    if (pesoValido == true && alturaValida == true) {
        var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
        tdIMC.textContent = imc.toFixed(2);
    }   
}

var addPacienteButton = document.querySelector("#adicionar-paciente");

addPacienteButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var tbody = document.querySelector("#tabela-pacientes");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    tbody.appendChild(pacienteTr);
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);  
})