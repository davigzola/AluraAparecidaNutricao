var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")

    xhr.addEventListener("load", function() {

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)
            pacientes.forEach(function(paciente) {
                adicionaPaciente(paciente);
            })
        } else {
            erroAjax.classList.remove("invisivel");
            erroAjax.textContent = "Erro ao buscar os pacientes: " + xhr.responseText;
        }

    })

    xhr.send()
})