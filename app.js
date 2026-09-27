// Captura de elementos del DOM
const btnStats = document.getElementById('btn-stats');
const textoEstadisticas = document.getElementById('estadisticas');

// Evento inicial antes de la modificación requerida en la iteración 3.1
btnStats.addEventListener('click', () => {
  textoEstadisticas.textContent = 'Carreras: 10 | Puntos: 250';
});