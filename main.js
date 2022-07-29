const productos = [
    {nombre: 'https://www.amazon.com/'},
    {nombre: 'https://www.instagram.com/descuentazoo/'},
    {nombre: 'https://www.facebook.com/'},
    {nombre: 'https://www.bgeneral.com/'},
    {nombre: 'https://www.multibank.com.pa/'},
    {nombre: 'https://www.prensa.com/'},
    {nombre: 'https://www.telemetro.com'},
    {nombre: 'https://www.aplacitos.com'},
    {nombre: 'https://gruporey.com.pa/'},
    {nombre: 'https://gruporey.com.pa/bolsa-de-empleo/'},

]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultados');

const filtrar = ()=>{

    resultado.innerHTML = " ";
    // console.log(formulario.value);
    const texto = formulario.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto)!==-1) {
            resultado.innerHTML += `
            <li> ✅ Resultado verificado: <br><a href="${producto.nombre}"> ${producto.nombre}</a></li>
            `
        }
    }
    if(resultado.innerHTML ===" "){
        resultado.innerHTML += `
    <li style="text-align:center; border-radius: 6px; padding: 4px;"><br><h3>❌ Resultado de origen desconocido ❌</h3><br><h4>Por favor ingresa otro enlace para verificar</h4></li>
        `
    }
}

boton.addEventListener('click', filtrar)
