const opciones = document.getElementById("opciones");
const listaDeOpciones = document.getElementById("listaDeOpciones");

opciones.addEventListener('click', () => {
if (listaDeOpciones.classList.contains("d-block")){
    listaDeOpciones.classList.add("d-none");
    listaDeOpciones.classList.remove("d-block");
}else{
    listaDeOpciones.classList.add("d-block");
    listaDeOpciones.classList.remove("d-none");
}
});