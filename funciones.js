
//Crear tarea
var lista = document.getElementById("lista");
var elementLi = document.createElement("li");
var inputData = document.getElementById("body--input").value;
var contentLi = document.createTextNode(inputData);
elementLi.appendChild(contentLi);

function agregarTarea(){
    lista.appendChild(elementLi);
}