const barra = document.querySelector("#barra");
const boton = document.querySelector("#btnver");
const boton2 = document.querySelector("#btnocultar");

boton.addEventListener("click",(evento)=>{
    evento.preventDefault();

    barra.removeAttribute("style");
})
boton2.addEventListener("click",(evento)=>{
    evento.preventDefault();

    barra.setAttribute("style","display: none;")
})