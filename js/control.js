const botones = document.querySelectorAll("button");
const h1 = document.querySelector("header > h1");
const barra = document.querySelector("header > nav");
const datos = document.querySelectorAll(".login input");
const login = document.querySelector(".login");
const test = document.querySelector("#test");

botones.forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (boton.id == "iniciar") {
      if (datos[0].value != "" && datos[1].value != "") {
        h1.setAttribute("style", "display: none;")
        barra.querySelector("h2").insertAdjacentText("beforeend", ` ${datos[0].value} ${datos[1].value}`);
        login.setAttribute("style", "display: none;");
        barra.removeAttribute("style");
        test.removeAttribute("style");
      }
      else {
        alert("completar todos los campos de texto para ingresar");
      }
    }

  });
});

barra.querySelector("#salir").addEventListener("click", (evento) => {
  evento.preventDefault();
  alert("al salir se pierde todo el prgreso del test");
  login.removeAttribute("style");
  h1.removeAttribute("style");
  barra.setAttribute("style", "display: none;");
  test.setAttribute("style", "display: none;");
  barra.querySelector("h2").innerHTML=`<i class="far fa-user"></i>`;
})