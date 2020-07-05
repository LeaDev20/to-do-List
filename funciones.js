//GENERAL
var lista = document.getElementById("lista");
var input = document.getElementById("body--input");
var btnAgregar = document.getElementById("body__boton--agregar");

//Crear/agregar y eliminar tarea:

function agregarTarea(){
    var tarea = input.value;
    var nuevaTarea = document.createElement("li");
    var contenido = document.createTextNode(tarea);
    if(tarea == ""){
        input.setAttribute("placeholder", "No pusiste nada")
        input.className = "error";
        lista.remove(nuevaTarea);
    } else {
        input.className = "";
    }
    nuevaTarea.appendChild(contenido);
    lista.appendChild(nuevaTarea);
    input.value = "";
    for(i = 0; i <= lista.children.length -1; i++){
        lista.children[i].addEventListener("click", lista.children[i].remove);
    } 
}

