
//Variables
let palabras = ['ALURA','ORACLE','ONE','JAVASCRIPT','HTML'];
let tablero  = document.getElementById('canvas').getContext('2d');
let palabraSecreta = '';
let letras = [];
let errores = 8;

//Palabra secreta 
const buscarPalabraSecreta = () => {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}
//Validar la letra ingresada
const validarLetra = (key) => {
    //Entre 65 y 90 estan todas las mayusculas ASCII
    if(key >= 65 && letras.indexOf(key) || 
       key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        console.log(key);
        return false;
    } else {
        console.log(key);
        return true;
    }
}
//AgragarLetraIncorrecta
const agragarLetraIncorrecta = () => {
    errores -= 1; 
    console.log(errores)
}

//Inicio del Juego
const iniciarJuego = () => {
    document.getElementById('uno').style.display = 'none';
    document.getElementById('dos').style.display = 'none';
    buscarPalabraSecreta();
    crearCanvas();
    dibujarLineas();

    document.onkeydown = (ev) => {
        let letra = ev.key.toUpperCase();
        if(validarLetra(letra) && palabraSecreta.includes(letra)) {
            for(let i = 0; i < palabraSecreta.length; i++) {
                if(palabraSecreta[i] === letra) {
                    letraCorrecta(i);
                }
            }
        }else {
            agragarLetraIncorrecta(letra);
            letraIncorrecta(letra, errores);
        }
    }
}

