// Variables globales
let temaSeleccionado = "";
let dificultadSeleccionada = "";

// Función para seleccionar tema
function seleccionarTema(tema) {
  temaSeleccionado = tema;
  document.getElementById("seleccion-tema").style.display = "none";
  document.getElementById("seleccion-dificultad").style.display = "block";
}

// Función para iniciar trivia
function iniciarTrivia(dificultad) {
  dificultadSeleccionada = dificultad;
  document.getElementById("seleccion-dificultad").style.display = "none";
  document.getElementById("preguntas").style.display = "block";
  cargarPregunta();
}

// Función para cargar preguntas (simulada)
function cargarPregunta() {
  const pregunta = "¿Cuál es la capital de Francia?";
  const respuestas = ["Madrid", "París", "Berlín", "Roma"];

  document.getElementById("pregunta").textContent = pregunta;
  const respuestasDiv = document.getElementById("respuestas");
  respuestasDiv.innerHTML = "";

  respuestas.forEach((respuesta, index) => {
    const btn = document.createElement("button");
    btn.textContent = respuesta;
    btn.className = "btn";
    btn.onclick = () => verificarRespuesta(index);
    respuestasDiv.appendChild(btn);
  });
}

// Función para verificar respuesta (simulada)
function verificarRespuesta(index) {
  const correcto = index === 1; // París es la respuesta correcta
  alert(correcto ? "¡Correcto!" : "Incorrecto, intenta de nuevo.");
  document.getElementById("btn-siguiente").style.display = "block";
}

// Función para cargar la siguiente pregunta (simulada)
function siguientePregunta() {
  alert("Cargando siguiente pregunta...");
}
