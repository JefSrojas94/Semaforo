const lucesDeCirculo = document.querySelectorAll('.luces-circulo');
let contadorLuces =0;

const mostrarLuz =() =>{
    lucesDeCirculo[contadorLuces].className = 'luces-circulo';
    contadorLuces++;
    if (contadorLuces > 2) contadorLuces=0;

    const luzActual=lucesDeCirculo[contadorLuces];
    luzActual.classList.add(luzActual.getAttribute('color'))
}
setInterval(mostrarLuz,1000)