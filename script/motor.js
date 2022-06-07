    for (i = 0; i < lesDades.length; i++) {
      document.write('<p><input type="checkbox" id=' + lesDades[i][0] + ' onclick="possa(' + [i][0] + ')"><label for="' + lesDades[i][0] + '">' + lesDades[i][1] + '</label><br><hr></p>');
    }
    function possa(bloc) { 
      let cadena = "lesDades[" + bloc + "][0]";
      let valor = eval(cadena);
      let arxiu = "blocs/" + valor + ".htm";
      let caixa = document.getElementById(valor);
         if(caixa.checked){
            fetch(arxiu)
            .then(response => {
            return response.text()
            })
            .then(data => {
            let noudiv = document.createElement("div");
            noudiv.id = "i" + valor;
            document.body.appendChild(noudiv);
            document.getElementById("i" + valor).innerHTML = data;
            })
         }else{       
          aborrar = document.getElementById("i" + valor);
          document.body.removeChild(aborrar);
          }
      }