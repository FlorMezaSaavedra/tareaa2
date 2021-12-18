$(document).ready(function () {
    // Función o Método, para buscar los datos de un pokemon por AJAX a la Api de Pokemon
    $("#btnBuscar").click(function (e) {
      e.preventDefault();
      var nombrePokemon = $("#campoBuscar").val().toLowerCase();
      if (nombrePokemon) {
        buscarPokemon(nombrePokemon);
      }
  
    });
  
    $("#btnLimpiar").click(function (e) {
      e.preventDefault();
      $("#personajes-container").empty();
      $('#campoBuscar').val('');
    });
  
    function buscarPersonajesDeRickYMorty(buscarPersonajesDeRickYMorty) {
      $.ajax({
        type: "GET",
        url: `https://rickandmortyapi.com/documentation/#character`,
        dataType: "json",
        success: function (data) {
          renderrickData(data)
        }
      });
    }
  
    function personajesPokeData(data) {
      let div = $("<div></div>");
      div.addClass("personajes card");
  
      let name = $("<h3></h3>");
      name.addClass("card-title");
      name.append(data.id + " " + data.name.toUpperCase());
      div.append(name);
  
      let img = $("<img></img>");
      img.attr("src", data.sprites.other["official-artwork"].front_default);
      img.addClass("card-img");
      div.append(img);
  
      let body = $("<div></div>");
      body.addClass("card-body");
  
      var personajesType = data.types;
      var tipos = '';
      personajesType.forEach(function (type) {
        if (personajesType.length > 1 && !personajesType.length.last) {
          tipos += `${type['type']['name']} - `.toUpperCase();
        } else {
          tipos += `${type['type']['name']}`.toUpperCase();
        }
  
      })
      body.append(`<div>Tipo: ${tipos}<div>`);
      div.append(body);
  
      $('#personajes-container').append(div);
    }
  
  
  });