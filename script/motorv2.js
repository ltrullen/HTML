for (i = 0; i < lesDades.length; i++) {
  let nivell = "";
  let finnivell = "";
  let pre = "";

  if (lesDades[i][2] == "2") {
    nivell = "<ul>";
    finnivell = "</ul>";
  } else {
    nivell = "";
    finnivell = "";
  }

  if (lesDades[i][3] == "1") {
    pre = "checked";
  }

  document.write(
    nivell +
      '<ul><input type="checkbox" numero = ' +
      [i][0] +
      " id=" +
      lesDades[i][0] +
      " " +
      pre +
      '  ><label for="' +
      lesDades[i][0] +
      '">' +
      lesDades[i][1] +
      "</label><br><hr></ul>" +
      finnivell
  );
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function genera() {
  for (i = 0; i < lesDades.length; i++) {
    let cadena = "lesDades[i][0]";
    let valor = eval(cadena);
    let arxiu = "blocs/" + valor + ".htm";
    let caixa = document.getElementById(valor);
    if (caixa.checked) {
      aborrar = document.getElementById("i" + valor);
      if (aborrar != null) {
        document.body.removeChild(aborrar);
      }
      fetch(arxiu)
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          let noudiv = document.createElement("div");
          noudiv.id = "i" + valor;
          document.body.appendChild(noudiv);
          document.getElementById("i" + valor).innerHTML = data;
        });
      await sleep(1000);
    } else {
      aborrar = document.getElementById("i" + valor);
      if (aborrar != null) {
        document.body.removeChild(aborrar);
      }
    }
  }
}
