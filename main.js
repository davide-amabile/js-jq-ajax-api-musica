$(document).ready(function() {
  $.ajax(
      {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
        console.log(data.response);
        listaDischi(data.response);
      },
      "error": function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
      }
      }
      );

      // creare la funzione del template
      function listaDischi(dato) {


        for ( i = 0; i < dato.length; i++) {
          var source = $("#dischi-template").html();
          var template = Handlebars.compile(source);

          var disco = dato[i];
          var html = template(disco);

          $(".cds-container").append(html);
      }
    }
});
