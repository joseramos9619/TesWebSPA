let cont = 1;
const botones = document.querySelectorAll("button");
const h1 = document.querySelector("header > h1");
const barra = document.querySelector("header > nav");
const datos = document.querySelectorAll(".login input");
const login = document.querySelector(".login");
const test = document.querySelector("#test");
const resultado = document.querySelector(".resultado");
const soluc = ['a', 'b', 'c', 'c', 'c', 'a', 'c', 'b'];

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
        botones[0].setAttribute("style","display: none;");
        botones[1].removeAttribute("style");
        botones[2].setAttribute("style","display: none;");

      }
      else {
        alert("completar todos los campos de texto para ingresar");
      }
    }

    if (boton.id == "btnsig") {
      if (cont >= 1 && cont <= 7) {
        cont++;
        test.querySelector(`#a-${cont}`).setAttribute("style", "background-color: rgb(92, 204, 92)");
        test.querySelector(`#a-${cont - 1}`).removeAttribute("style");
        test.querySelector(`#p-${cont}`).removeAttribute("style");
        test.querySelector(`#p-${cont - 1}`).setAttribute("style", "display: none;");
        botones[0].removeAttribute("style");
        test.querySelector("#contador").innerText = `${cont}/8`;
        test.querySelector("#cargar").setAttribute("value", cont);
      }
      if (cont == 8) {
        test.querySelector(`#a-${cont}`).setAttribute("style", "background-color: rgb(92, 204, 92)");
        test.querySelector(`#a-${cont - 1}`).removeAttribute("style");
        botones[1].setAttribute("style", "display: none;");
        botones[2].removeAttribute("style");
        test.querySelector("#cargar").setAttribute("value", cont);
      }
    }

    if (boton.id == "btnant") {
      if (cont <= 8 && cont >= 2) {
        cont--;
        test.querySelector(`#a-${cont + 1}`).removeAttribute("style")
        test.querySelector(`#a-${cont}`).setAttribute("style", "background-color: rgb(92, 204, 92)");
        test.querySelector(`#p-${cont}`).removeAttribute("style");
        test.querySelector(`#p-${cont + 1}`).setAttribute("style", "display: none;");
        botones[1].removeAttribute("style");
        test.querySelector("#contador").innerText = `${cont}/8`;
        botones[2].setAttribute("style", "display: none;");
        test.querySelector("#cargar").setAttribute("value", cont);
      }
      if (cont == 1) {
        test.querySelector(`#a-${cont + 1}`).removeAttribute("style")
        test.querySelector(ant).setAttribute("style", "background-color: rgb(92, 204, 92)");
        botones[0].setAttribute("style", "display: none;");
        test.querySelector("#contador").innerText = `${cont}/8`;
        test.querySelector("#cargar").setAttribute("value", cont);
      }
    }

    if (boton.id == "btnfin") {
      let asier = 0;
      for (let i = 0; i <= 7; i++) {
        let respuesta = test.querySelector(`#r-${i + 1}`).value
        if (soluc[i] == respuesta) {
          asier++;
          resultado.querySelector(`#res-${i + 1}`).setAttribute("style", "border: 2px solid rgb(0, 172, 149);");
        }
        else {
          resultado.querySelector(`#res-${i + 1}`).setAttribute("style", "border: 2px solid red;");
        }

      }
      console.log(asier)
      resultado.querySelector("span").innerHTML = `${asier}/8<br>
      Nota: ${asier * 0.625}`;
      if ((asier * 0.625) >= 3) {
        resultado.querySelector("h2").innerText = "Test Aprobado";
      }
      else {
        resultado.querySelector("h2").innerText = "Test Reprobado";
      }
      test.setAttribute("style", "display: none;");
      resultado.removeAttribute("style");
    }
    if(boton.id=="salir-2"){
      cont = 1;
      let limpiar = document.querySelectorAll("input");
      console.log(limpiar)
      for (let j = 0; j < limpiar.length; j++) {
        limpiar[j].value = "";
      }
      login.removeAttribute("style");
      h1.removeAttribute("style");
      barra.setAttribute("style", "display: none;");
      test.setAttribute("style", "display: none;");
      resultado.setAttribute("style", "display: none;");
      barra.querySelector("h2").innerHTML = `<i class="far fa-user"></i>`;
      test.querySelector("#p-1").removeAttribute("style");
      test.querySelector(`#a-1`).setAttribute("style","background-color: rgb(92, 204, 92)");
      for (let k = 2; k <= 8; k++) {
        test.querySelector(`#p-${k}`).setAttribute("style", "display: none;");
        test.querySelector(`#a-${k}`).removeAttribute("style");
      }
    }
  });
});

barra.querySelector("#salir").addEventListener("click", (evento) => {
  evento.preventDefault();
  alert("al salir se pierde todo el prgreso del test");
  cont = 1;
  let limpiar = document.querySelectorAll("input");
  console.log(limpiar)
  for (let j = 0; j < limpiar.length; j++) {
    limpiar[j].value = "";
  }
  login.removeAttribute("style");
  h1.removeAttribute("style");
  barra.setAttribute("style", "display: none;");
  test.setAttribute("style", "display: none;");
  resultado.setAttribute("style", "display: none;");
  barra.querySelector("h2").innerHTML = `<i class="far fa-user"></i>`;
  test.querySelector("#p-1").removeAttribute("style");
  test.querySelector(`#a-1`).setAttribute("style","background-color: rgb(92, 204, 92)");
  for (let k = 2; k <= 8; k++) {
    test.querySelector(`#p-${k}`).setAttribute("style", "display: none;");
    test.querySelector(`#a-${k}`).removeAttribute("style");
  }
})