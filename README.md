Alura - solución reto 1: amigo secreto.
<h1>Challenge 1: Amigo Secreto</h1>
<br>
<p align="left">
  <img src="https://img.shields.io/badge/FINALIZADO-green">
</p>
<p>La solución planteada al desafío relacionado, hace parte de la ruta de aprendizaje en el programa <strong>Principiante en Programación G9 - ONE</strong>. </p>
<br>
<p>Herramienta para la gestión del proyecto (Trello): https://trello.com/b/v0TFbgqP/trello-challenge-amigo-secreto-esp</p>
<p>Repositorio base para el desafío: https://github.com/Oracle-Next-Education/challenge-amigo-secreto_esp/archive/refs/heads/main.zip</p>

<br>
<br>
<h4>Array: amigos</h4>
<p>Array encargado de contener todos los nombres generados al dar clic en 'Añadir':</p>
<br>
<img width="214" height="39" alt="image" src="https://github.com/user-attachments/assets/c597216a-46b2-4aab-aff0-615842c7e97c" />

<br>
<br>
<h4>Función: agregar amigo</h4>
<p>Función que contiene la lógica para agregar los nombres de los amigos. Captura en la variable 'inputNombre' aquello que el usuario ingresa en el elemento con id 'amigo'; luego se eliminan posibles espacios y es guardado en la variable 'nombreFiltrado'. Posteriormente, se aplican condiciones para gestionar el flujo del programa; en este caso, 3 posibles resultados:</p>
<br>
<img width="763" height="594" alt="image" src="https://github.com/user-attachments/assets/89e706e5-0e55-4c39-820d-83947da87b95" />

<br>
<br>
<h4>Función: listar amigos</h4>
<p>Esta función se encarga de listar en el HTML, todos los nombres contenidos en el array 'amigos'. Captura el elemento con id 'listaAmigos' en la variable 'ulLista'; luego, limpia la variable con "" para evitar datos residuales después de su uso. Realiza un ciclo 'for' para crear tantos 'li' como nombres existan guardados en el array 'amigos', para luego, agregarles a cada 'li' creado un  nombre. Finalmente el 'li' es agregado a 'ulLista' para su visualización en el HTML: </p>
<br>
<img width="701" height="304" alt="image" src="https://github.com/user-attachments/assets/796fc706-6f4a-4b89-ad54-83dc9ff4e4c8" />

<br>
<br>
<h4>Función: sortear amigos</h4>
<p>Aquí, se hace un sorteo aleatorio de los nombres contenidos en el array 'amigos', y es enviado el valor resultante al HTML. Se genera un número aleatorio en la variable 'numeroRandom'. Se captura el elemento HTML con id 'reultado' en la variable 'ulResultado', para luego, dejar en blanco dicha variable dandole el valor de "". Se valida mediante flujo de control que el array 'amigos' debe ser diferente de '0' para poder realizar el sorteo, y luego se crea la etiqueta 'li', que a su vez es guardada en la variable 'li'. Se adiciona el resultado del sorteo en la varibable 'li', para posteriormente ser adicionada al HTML que permitirá su visualización al usuario:</p>
<br>
<img width="809" height="441" alt="image" src="https://github.com/user-attachments/assets/d852b09b-1212-4187-b142-6e5db8be96d7" />

