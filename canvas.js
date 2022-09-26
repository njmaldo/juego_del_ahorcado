const crearCanvas = () => {
    tablero.lineWidth = 8;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';
    tablero.strokeStyle = '#8A3871'
    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}
const dibujarLineas = () => {
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';
    tablero.strokeStyle = '#8A3871'

    let ancho = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(500 + (ancho * i), 640);
        tablero.lineTo(550 + (ancho * i), 640);
    }
    tablero.stroke();
    tablero.closePath();
}

const letraCorrecta = (index) => {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';

    let ancho = 600/palabraSecreta.length;
    tablero.strokeText(palabraSecreta[index], 505+(ancho*index), 620);
    tablero.stroke();
}

const letraIncorrecta = (letra, espacio) => {
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';
    tablero.strokeText(letra, 535+(40*(10-espacio)), 710, 40);
}