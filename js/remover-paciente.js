var tabela = document.querySelector("table");
var areaTabela = document.querySelector(".tabela-areas")

tabela.addEventListener("dblclick", function(event) {
    if (event.target.parentNode != areaTabela) {

        event.target.parentNode.classList.add("fadeout")

        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500)
        
    }
    })