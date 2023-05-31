var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    
    var pesoPaciente = tdPeso.textContent;
    var alturaPaciente = tdAltura.textContent;

    var pesoEhValido = pesoValido(pesoPaciente);
    var alturaEhValida = alturaValida(alturaPaciente);

    var tdIMC = paciente.querySelector(".info-imc")

    if (!pesoEhValido) {
        tdIMC.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEhValida) {
        tdIMC.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaIMC(pesoPaciente, alturaPaciente);
        tdIMC.textContent = imc;
    }   
}

function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2)
}

function pesoValido(peso) {
    if (peso >= 0 && peso <= 800) {
        return true
    } else {
        return false
    }
}

function alturaValida(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}