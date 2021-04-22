const botones = document.querySelectorAll("button");
const h1 = document.querySelector("header > h1");
const barra = document.querySelector("header > nav");

botones.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
        evento.preventDefault();
        console.log(boton.id)
        if (boton.id == "iniciar") {
          h1.setAttribute("style","display: none;")
        }

    });
});