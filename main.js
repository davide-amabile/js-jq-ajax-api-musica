$(document).ready(function() {


  // effettuo la chimata ajax
  $.ajax(
      {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
        // invoco la funzione per il template
        listaDischi(data.response);
      },
      "error": function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
      }
      }
      );


      // creare la funzione del template
      function listaDischi(dato) {
        // creo un ciclo per attraversare l'array
        for ( i = 0; i < dato.length; i++) {
          var source = $("#dischi-template").html();
          var template = Handlebars.compile(source);
          // associo gli oggetti al template
          var disco = dato[i];
          var html = template(disco);
          // appendo il template nel HTML
          $(".cds-container").append(html);
        }
      // fine ciclo for
      }
    // fine funzione


    $(document).on("click", "#genere_musicale > option", function(){
      var valore = $(this).val();
      console.log(valore);
    });



});
