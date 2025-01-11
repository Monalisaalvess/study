//seidebar*
     function toggleMenu(){
    const sidebar = document.querySelector ('.sidebar');
     sidebar.classList.toggle('expanded');
     }




     document.addEventListener("DOMContentLoaded", function () {
        const display = document.getElementById("display");
        let currentInput = "";
    
        function updateDisplay(value) {
            display.innerText = value;
        }
    
        document.getElementById("clear").addEventListener("click", function () {
            currentInput = "";
            updateDisplay("0");
        });
    
        // Números e operadores
        document.querySelectorAll(".btn").forEach(function (button) {
            button.addEventListener("click", function () {
                const value = this.getAttribute("data-value");
                currentInput += value;
                updateDisplay(currentInput);
            });
        });
    
        // Remover o último caractere
        document.getElementById("backspace").addEventListener("click", function () {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput || "0");
        });
    
        // Calcular resultado
        document.getElementById("equals").addEventListener("click", function () {
            try {
                const result = eval(currentInput.replace("^", "**"));
                updateDisplay(result);
                currentInput = String(result);
            } catch (e) {
                updateDisplay("Erro");
            }
        });
    
        // Calcular raiz quadrada
        document.getElementById("sqrt").addEventListener("click", function () {
            try {
                const result = Math.sqrt(eval(currentInput));
                updateDisplay(result);
                currentInput = String(result);
            } catch (e) {
                updateDisplay("Erro");
            }
        });
    
        // Calcular potência
        document.getElementById("power").addEventListener("click", function () {
            currentInput += "**";
            updateDisplay(currentInput);
        });
    });
    

/*
function updateCalendar() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Janeiro é 0, então somamos 1
    const year = today.getFullYear();

    // Formatar a data como DD/MM/AAAA
    const dateString = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    document.getElementById('calendar').innerHTML = `<h2>Hoje é: ${dateString}</h2>`;
}

// Atualizar o calendário ao carregar a página
window.onload = updateCalendar;  */