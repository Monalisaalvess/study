document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
  
    // Atualizar o display
    function updateDisplay(value) {
      display.innerText = value;
    }
  
    // Limpar o display
    document.getElementById("clear").addEventListener("click", function () {
      currentInput = "";
      updateDisplay("0");
    });
  
    // Adicionar números e operadores
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
  