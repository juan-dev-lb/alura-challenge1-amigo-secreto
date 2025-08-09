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
        listarAmigos();
        return;
    }
}

function listarAmigos(){
    let ulLista = document.getElementById('listaAmigos');
    ulLista.innerHTML = "";

    for (i=0 ; i<amigos.length ; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        ulLista.appendChild(li);
    }
}

function sortearAmigo(){
    let numeroRandom = Math.floor(Math.random() * amigos.length);
    let ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = "";

    if(amigos.length === 0){
        alert('Ingresa amigos e intenta nuevamente!');
        return;
    }

    let li = document.createElement('li');
    li.textContent = "Amigo sorteado: " + amigos[numeroRandom];
    ulResultado.appendChild(li);
}