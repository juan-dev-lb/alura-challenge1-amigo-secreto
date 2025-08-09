// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputNombre = document.getElementById('amigo');
    let nombreFiltrado = inputNombre.value.trim();
    
    if(amigos.includes(nombreFiltrado)) {
        alert('Ingresa un nombre diferente!');
        return;

    } else if (nombreFiltrado === "") {
        alert('Debes ingresar un nombre válido!');
        return;

    } else {
        amigos.push(nombreFiltrado);
        alert('Amigo ingresado con éxito: ' + nombreFiltrado);
        return;
    }
}

function listarAmigos(){
    let ulLista = document.getElementById('listaAmigos');
}