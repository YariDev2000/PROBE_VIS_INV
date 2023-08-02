/**
 * Desarrollado por Yarilenka Benites Mozo
 * Referencias: https://stackoverflow.com/a/26497772/2391195
 *             https://developers.google.com/apps-script/guides/html/communication#index.html_4
 */



var sheetName = "bd_VIS";


const BD_ID = '1JRWg8TYX95zP2pIHt5o-Si_MyuzkZbUzStB0-wt8u9U';
const SS = SpreadsheetApp.openById(BD_ID);
const sheetUsuarios = SS.getSheetByName(sheetName);


function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function buscarFila(codigodeinventario = '1000002') {
  const codigosdeinventario = sheetUsuarios.getRange(2, 1, sheetUsuarios.getLastRow()-1,1).getValues().map(codigodeinventario => codigodeinventario[0]);
  // console.log(codigosdeinventario);
  const index = codigosdeinventario.indexOf(Number(codigodeinventario));
  //console.log(index);
  const row = index + 2;
  return row;
}

  function readUsers() {
    const dataUsuarios = sheetUsuarios.getDataRange().getDisplayValues();
    dataUsuarios.shift();
    if(dataUsuarios.length === 0) {
      return "No hay registros para mostrar";
    }
    /*console.log(dataUsuarios);*/
    return dataUsuarios;
}
