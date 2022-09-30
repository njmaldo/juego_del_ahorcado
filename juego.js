
//Variables
let btnNuevoJuego = document.getElementById('nuevo-juego').style.display = 'none';
let txtPalabra = document.getElementById('n-palabra').style.display = 'none';
let btn5_6 = document.getElementById('button-5-6-content').style.display = 'none';
let btnSalir = document.getElementById('salir').style.display = 'none';
let signo = document.getElementById('texto').style.display = 'none';
let pantalla = document.getElementById('canvas');
let newGame = document.getElementById('nuevo-juego');
let cancelar = document.getElementById('cancelar');
let salir = document.getElementById('salir');

let tablero  = document.getElementById('canvas').getContext('2d');
let palabras = ['ALURA','ORACLE','ONE','JAVASCRIPT','HTML'];
let palabraSecreta = '';
let palabraCorrecta = '';
let letras = [];
let letrasIncorrectas = [];
let letraElegida = [];
let errores = 8;
let numErrores = 8;

//Mostrar text-area
const mostrarAgregarPalabra = () => {
    document.getElementById('iniciar-juego').style.display = 'none';
    document.getElementById('nueva-palabra').style.display = 'none';
    document.getElementById('n-palabra').style.display = 'flex';
    document.getElementById('texto').style.display = 'flex';
    document.getElementById('button-5-6-content').style.display = 'flex';
}

document.getElementById('iniciar-juego').onclick = () => {
    iniciarJuego();
};
newGame.addEventListener('click', () => {
    location.reload();
});
cancelar.addEventListener('click', () => {
    location.reload();
});
salir.addEventListener('click', () => {
    location.reload();
});
document.getElementById('guardar-empezar').onclick = () => {
    nuevaPalabra();
};

//Verificar si el juego termino
const finJuego = (letra) => {
    if(letraElegida.length < palabraSecreta.length) {
        letrasIncorrectas.push(letra);
        if(letrasIncorrectas.length > numErrores) {
            perdio();
        }else if (letraElegida.length < palabraSecreta.length) {
            agragarLetraIncorrecta(letra);
            letraIncorrecta(letra,errores);
        }
    }
}
//Verifico si ganó
const juegoGanado = (letra) => {
    letraElegida.push(letra.toUpperCase());
    if(letraElegida.length == palabraSecreta.length) {
        gano();
    }
}
//Palabra secreta 
const buscarPalabraSecreta = () => {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}
//Verifico la letra ingresada
const letraIngresada = (key) => {
    if(letras.length < 1 || letras.indexOf(key) < 0) {
        letras.push(key);
        return false;
    }else {
        letras.push(key);
        return true;
    }
}
//Teclas que no sean válidas
const verificarLetra = (keyCode) => {
    if(typeof keyCode === 'number' && keyCode >= 65 && keyCode <= 90) {
        return true;
    }else {
        return false;
    }
}
//Agragar letra Correcta
const agragarLetraCorrecta = (i) => {
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}
//AgragarLetraIncorrecta
const agragarLetraIncorrecta = (aLetra) => {
    if(palabraSecreta.indexOf(aLetra) <= 0) {
        errores -= 1; 
    }
}
//Gaurdar nueva palabra 
const nuevaPalabra = () => {
    let nuevaPalabra = document.getElementById('n-palabra').value;
    nuevaPalabra.placeholder.value = '';
    if(nuevaPalabra !== '') {
        palabras.push(nuevaPalabra.toUpperCase());
        alert('Palabra guardada...');
        document.getElementById('n-palabra').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('button-5-6-content').style.display = 'none';
        iniciarJuego();
    } else {
        alert('Debes ingresar una palabra :( ');
    }
}
//Inicio del Juego
const iniciarJuego = () => {
    document.getElementById('iniciar-juego').style.display = 'none';
    document.getElementById('nueva-palabra').style.display = 'none';
    document.getElementById('salir').style.display = 'block';
    document.getElementById('nuevo-juego').style.display = 'block';
    buscarPalabraSecreta();
    crearCanvas();
    dibujarLineas();
//Que letra se presionó 
    document.onkeydown = (ev) => {
        let letra = ev.key.toUpperCase();
        if(letrasIncorrectas.length <= numErrores) {
            if(!letraIngresada(ev.key) && verificarLetra(ev.keyCode)){
                if(palabraSecreta.includes(letra)) {
                    agragarLetraCorrecta(palabraSecreta.indexOf(letra))
                    for(let i = 0; i < palabraSecreta.length; i++) {
                        if(palabraSecreta[i] === letra) {
                            letraCorrecta(i);
                            juegoGanado(letra);
                        }
                    }
                }else {
                    if(!letraIngresada(ev.key) && !juegoGanado(letra)) return;
                        dibujarAhorcado(errores);
                        finJuego(letra);
                }
            }
        }else {
            alert('Ups! llegaste al limite de letras incorrectas :( ');
        }
    };
}

