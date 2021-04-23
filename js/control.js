let cont = 1;
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
        h1.setAttribute("style", "display: none;");
        barra.querySelector("h2").insertAdjacentText("beforeend", ` ${datos[0].value} ${datos[1].value}`);
        login.setAttribute("style", "display: none;");
        barra.removeAttribute("style");
        test.removeAttribute("style");
      }
      else {
        alert("completar todos los campos de texto para ingresar");
      }
    }

    if (boton.id == "btnsig") {
      if (cont >= 1 && cont <= 7) {
        cont++;
        let sig = "#a-" + cont;
        let ant = `#a-${cont - 1}`;
        test.querySelector(sig).setAttribute("style", "background-color: rgb(92, 204, 92)");
        test.querySelector(ant).removeAttribute("style");
        botones[0].removeAttribute("style");
        test.querySelector("#contador").innerText=`${cont}/8`;
        test.querySelector("#cargar").setAttribute("value",cont);
      }
      if (cont == 8) {
        let sig = "#a-" + cont;
        let ant = `#a-${cont - 1}`;
        test.querySelector(sig).setAttribute("style", "background-color: rgb(92, 204, 92)");
        test.querySelector(ant).removeAttribute("style");
        botones[1].setAttribute("style", "display: none;");
        botones[2].removeAttribute("style");
        test.querySelector("#cargar").setAttribute("value",cont);
      }
    }

    if (boton.id == "btnant") {
      if (cont <= 8 && cont >= 2) {
        cont--;
        let ant = "#a-" + cont;
        let sig = `#a-${cont + 1}`;
        test.querySelector(sig).removeAttribute("style")
        test.querySelector(ant).setAttribute("style", "background-color: rgb(92, 204, 92)");
        botones[1].removeAttribute("style");
        test.querySelector("#contador").innerText=`${cont}/8`;
        botones[2].setAttribute("style", "display: none;");
        test.querySelector("#cargar").setAttribute("value",cont);
      }
      if (cont == 1) {
        let ant = "#a-" + cont;
        let sig = `#a-${cont + 1}`;
        test.querySelector(sig).removeAttribute("style")
        test.querySelector(ant).setAttribute("style", "background-color: rgb(92, 204, 92)");
        botones[0].setAttribute("style", "display: none;");
        test.querySelector("#contador").innerText=`${cont}/8`;
        test.querySelector("#cargar").setAttribute("value",cont);
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
  barra.querySelector("h2").innerHTML = `<i class="far fa-user"></i>`;
})