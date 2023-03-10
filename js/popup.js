const mas = document.getElementById("mas");
const mas2 = document.getElementById("mas2");
const menos = document.getElementById("menos");
const menos2 = document.getElementById("menos2");

mas.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Llamar a la función que se desea ejecutar
        vermas('mas');
    }
});
mas2.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Llamar a la función que se desea ejecutar
        vermas2('mas');
    }
});
menos.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Llamar a la función que se desea ejecutar
        vermas('menos');
    }
});
menos2.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Llamar a la función que se desea ejecutar
        vermas2('menos');
    }
});





function vermas(id){
    if(id=="mas"){
        document.getElementById("desplegar").style.display="block";
        document.getElementById("mas").style.display="none";
    }
    else{
        document.getElementById("desplegar").style.display="none";
        document.getElementById("mas").style.display="inline";
    }
}
function vermas2(id){
    if(id=="mas"){
        document.getElementById("desplegar2").style.display="block";
        document.getElementById("mas2").style.display="none";
    }
    else{
        document.getElementById("desplegar2").style.display="none";
        document.getElementById("mas2").style.display="inline";
    }
}