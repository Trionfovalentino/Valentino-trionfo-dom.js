let timer; // Variabile per l'intervallo
let timeLeft; // Variabile per tenere traccia dei secondi rimanenti
const display = document.querySelector('#timerDisplay');
const input = document.querySelector('#secondsInput');

// Selezioniamo i bottoni
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

// Funzione AVVIA / RIPRENDI
startBtn.addEventListener('click', () => {
   
    if (!timeLeft) {
        timeLeft = parseInt(input.value);
    }

    if (timer) clearInterval(timer);

    // Controllo se il valore è un numero valido
    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Inserisci un numero valido di secondi!");
        return;
    }

    display.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Tempo scaduto!");
            timeLeft = null; 
        }
    }, 1000);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(timer);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer); // Ferma il countdown
    timeLeft = null;      // Svuota il tempo rimanente
    input.value = "";     // Pulisce l'input
    display.innerText = "0"; // Azzera il display
});