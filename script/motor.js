for (i = 0; i < lesDades.length; i++) {
  let nivell = "";
  let finnivell = "";

  if (lesDades[i][2] == "2") {
    nivell = "<ul>";
    finnivell = "</ul>";
  }else{
    nivell = "";
    finnivell = "";
  }
  document.write(
    nivell +
      '<ul><input type="checkbox" id=' +
      lesDades[i][0] +
      ' onclick="possa(' +
      [i][0] +
      ')"><label for="' +
      lesDades[i][0] +
      '">' +
      lesDades[i][1] +
      "</label><br><hr></ul>" +
      finnivell   
      );
}
function possa(bloc) {
  let cadena = "lesDades[" + bloc + "][0]";
  let valor = eval(cadena);
  let arxiu = "blocs/" + valor + ".htm";
  let caixa = document.getElementById(valor);
  if (caixa.checked) {
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
  } else {
    aborrar = document.getElementById("i" + valor);
    document.body.removeChild(aborrar);
  }
}
