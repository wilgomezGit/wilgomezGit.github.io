// Rutinas por día
const routines = {
  lunes: [
    "3 × 1 min saltar cuerda (calentamiento)",
    "4 × 10-12 Press de pecho",
    "3 × 12 Aperturas con mancuernas",
    "3 × 12-15 Fondos en silla",
    "3 × 10-12 Extensión de tríceps",
    "5 min cuerda (intervalos)"
  ],
  martes: [
    "3 × 1 min saltar cuerda",
    "4 × 10-12 Remo inclinado",
    "3 × 10 Remo a una mano",
    "4 × 12 Curl de bíceps alternado",
    "3 × 12 Curl martillo",
    "5 min saltar cuerda"
  ],
  miercoles: [
    "3 × 1 min saltar cuerda",
    "4 × 12-15 Sentadillas con mancuernas",
    "3 × 10 Zancadas por pierna",
    "4 × 12 Peso muerto rumano",
    "3 × 15 Hip thrust con mancuerna",
    "5-7 min saltar cuerda"
  ],
  jueves: [
    "3 × 1 min saltar cuerda",
    "4 × 10-12 Press militar",
    "3 × 12-15 Elevaciones laterales",
    "3 × 12 Elevaciones frontales",
    "3 × 30-45 seg Plancha",
    "3 × 15-20 Giros rusos con mancuerna",
    "5 min saltar cuerda"
  ],
  viernes: [
    "Circuito 3-4 rondas:",
    "1 min saltar cuerda",
    "12 Press de pecho",
    "12 Remo con mancuernas",
    "12 Sentadillas con mancuernas",
    "10 Press militar",
    "12 Curl de bíceps",
    "12 Extensión de tríceps",
    "30 seg Plancha",
    "Final: 5 min cuerda"
  ]
};

// Mostrar rutina
function showDay(day) {
  const container = document.getElementById("routine-container");
  container.innerHTML = `<h2>${day.toUpperCase()}</h2>`;
  routines[day].forEach(ex => {
    const div = document.createElement("div");
    div.className = "routine-item";
    div.innerHTML = `<input type="checkbox"> ${ex}`;
    container.appendChild(div);
  });
}

// Temporizador
let timer;
let seconds = 0;

function updateDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("time").textContent = `${mins}:${secs}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  seconds = 0;
  updateDisplay();
}

// Mostrar lunes por defecto
showDay("lunes");
updateDisplay();
