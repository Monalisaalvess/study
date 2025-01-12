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
    
       // Variáveis globais
let workTime = 1; // Tempo de trabalho em minutos
let breakTime = 5; // Tempo de pausa em minutos
let minutes = workTime;
let seconds = 0;
let isWorking = true;
let interval; // Para armazenar o intervalo
const workTittle = document.getElementById('work');
const breakTittle = document.getElementById('break');

// Exibição inicial
window.onload = function () {
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
};

// Atualizar exibição do cronômetro
function updateDisplay() {
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}

// Função principal do cronômetro
function timerFunction() {
    if (seconds === 0) {
        if (minutes === 0) {
            // Alternar entre trabalho e pausa
            isWorking = !isWorking;
            minutes = isWorking ? workTime : breakTime;
            workTittle.classList.toggle('active');
            breakTittle.classList.toggle('active');
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    updateDisplay();
}

// Iniciar o cronômetro
function start() {
    if (!interval) {
        interval = setInterval(timerFunction, 1000);
    }
}

// Parar o cronômetro (opcional)
function stop() {
    clearInterval(interval);
    interval = null;
}

// Reiniciar o cronômetro
document.getElementById('reset').onclick = function () {
    stop();
    isWorking = true;
    minutes = workTime;
    seconds = 0;
    workTittle.classList.add('active');
    breakTittle.classList.remove('active');
    updateDisplay();
};



//to-do list 

    let inoutBx = document.querySelector('#inputBx');
    let list = document.querySelector('#list');
    inputBx.addEventListener("keyup" , function(event) {
        if (event.key == "enter") {
            addItem(this.value)
            this.value = ""
        }
    })
        let addItem = (inputBx) => {
            let listItem = document.createElement("li");
                listItem.innerHTML = `${inputBx}<i><i>`;

                listItem.addEventListener("click", function(){
                    this.classList.toggle('done');
                })

                listItem.querySelector("i").addEventListener("click", function(){
                    listItem.remove()
                })

                list.appendChild(listItem);

        }




        //calendar 
        document.addEventListener('DOMContentLoaded' , function () {
            const monthYear = document.getElementById('month-year');
            const daysContainer = document.getElementById('days');
            const prevButton = document.getElementById ('prev');
            const nextButton = document.getElementById('next');


            const month = [
                'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'Agust' , 'September' , 'October' , 'November' , 'December'
            ];

            let currentDate = new Date();
            let today = new Date ();
            function renderCalendar(date ){
                const year = date.getFullYear();
                const month = date.getMonth();
                const firstDay = new Date (year, month, 1).getDate();
                const lastDay = new Date(year, month + 1, 0).getDate();
                monthYear.textContent = `${months[month]} ${year}`;


                daysContainer.innerHTML = '';


                    const prevMonthLastDay = new Date(year, month , 0 ) .getDate();
                    for (let i = firstDay; i > 0; i--){
                        const dayDiv = document.createElement('div');
                        dayDiv.textContent = prevMonthLastDay -i + 1;
                        dayDiv.classList.add('fade');
                        daysContainer.appendChild(dayDiv);
                    }


                for (ler i = 1; <= lestDay; i++){
                    const dayDiv = document.createElement('div');
                    dayDiv.textContent = i;
                    if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
                        dayDiv.classList.add('today');
                    }
                    daysContainer.appendChild(daysDiv)
                }
                const nextMonthStartDay = 7 - new Date(year, month +1. 0).getDay() - 1;
                for (let i = 1; i <= nextMonthStartDay; i++) {
                    const dayDiv = document4.createElement('div');
                        dayDiv.textContent =  i;
                        dayDiv.classList.add('fade');
                        daysContainer.appendChild(dayDiv);

                }

            }


                prevButton.addEventListener('click', function ( {
                    currentDate.setMonth(currentDate.getMonth() - 1);
                }));       
                
                nextButton.addEventListener('click', function(){
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    renderCalendar(currentDate);
                });


            renderCalendar(currentDate);
        });




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
        window.onload = updateCalendar; 