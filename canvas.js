const crearCanvas = () => {
    tablero.lineWidth = 8;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';
    tablero.strokeStyle = '#8A3871'
    tablero.fillRect(0, 0, 1200, 800);
    tablero.beginPath();
    tablero.moveTo(500, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}
const dibujarLineas = () => {
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';
    tablero.strokeStyle = '#024252'

    let ancho = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(445 + (ancho * i), 640);
        tablero.lineTo(490 + (ancho * i), 640);
    }
    tablero.stroke();
    tablero.closePath();
}

const letraCorrecta = (index) => {
    tablero.font = ' 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';

    let ancho = 600 / palabraSecreta.length;
    tablero.strokeText(palabraSecreta[index], 450 + (ancho * index), 620);
    tablero.stroke();
}

const letraIncorrecta = (letra, espacio) => {
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#024252';
    tablero.strokeText(letra, 535 + (40 * (10 - espacio)), 710, 40);
}
// resto
const dibujarAhorcado = (puntaje) => {
    tablero.lineWidth = 8;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.strokeStyle = '#024252';

    if (puntaje === 8) {
        tablero.moveTo(700, 500);
        tablero.lineTo(700, 100);
    }
    if (puntaje === 7) {
        tablero.moveTo(850, 100);
        tablero.lineTo(700, 100);
    }
    if (puntaje === 6) {
        tablero.moveTo(850, 100);
        tablero.lineTo(850, 171);
    }
    if (puntaje === 5) {
        tablero.moveTo(900, 230);
        tablero.arc(850, 230, 50, 0, Math.PI * 2);
    }
    if (puntaje === 4) {
        tablero.moveTo(850, 389);
        tablero.lineTo(850, 289);
    }
    if (puntaje === 3) {
        tablero.moveTo(850, 389);
        tablero.lineTo(800, 450);
    }
    if (puntaje === 2) {
        tablero.moveTo(850, 389);
        tablero.lineTo(890, 450);
    }
    if (puntaje === 1) {
        tablero.moveTo(850, 330);
        tablero.lineTo(800, 389);
    }
    if (puntaje === 0) {
        tablero.moveTo(850, 330);
        tablero.lineTo(890, 389);
    }
    tablero.stroke();
    tablero.closePath();
}

const perdio = () => {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round'
    tablero.lineJoin = 'round';
    tablero.fillStyle = 'red';
    tablero.moveTo(850, 330);
    tablero.fill()
    tablero.fillText('GAME OVER!', 900, 320);
    tablero.fillText('Perdiste!', 950, 360);
    tablero.fillText(' (-_-) ', 990, 400);
    setTimeout(recargar, 5000);
}

const gano = () => {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = 'green';
    tablero.fillText('(+_+)', 950, 290);
    tablero.fillText('Felicitaciones!', 870, 370);
    tablero.fillText('Ganaste!', 930, 420);
    setTimeout(recargar, 5000);
}

const recargar = () => {
    location.reload();
}