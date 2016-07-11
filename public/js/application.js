$(document).ready(function(){
  // Tu código va aquí
  var stop1
  var stop2
  var detenido1 = false
  var detenido2 = false
  var marca1
  var marca2
  var num_cell_1
  var num_cell_2

  $("#start_btn").click(function(){

      valores_iniciales();
      iniciar;
      throw_coin1();
      throw_coin2();

    $("#start_btn").prop("disabled", true);
    $("#start_btn").html("Reiniciar")
  });

  //Letra 81 = q para el Player1
  $(document).keyup(function(letter){
    if (letter.keyCode == 81) {
      clearTimeout(stop1);
      detenido1 = true;
      document.addEventListener("onkeydown",detenidos());
    }
  });

//Letra 80 = p para el Player2
  $(document).keyup(function(letter){
    if (letter.keyCode == 80) {
      clearTimeout(stop2);
      detenido2 = true;
      document.addEventListener("onkeydown",detenidos());
    }
  });

  function valores_iniciales(){
    $("#start_btn").prop("disabled", false);
    $('tr#Player1').find('td.active').first().removeClass("active");
    $('tr#Player1').find('#num_tab_0').addClass("active");
    $('tr#Player2').find('td.active').first().removeClass("active");
    $('tr#Player2').find('#num_tab_0').addClass("active");
    var detenido1 = false
    var detenido2 = false
  };
  
  function throw_coin1(value){
    $('tr#Player1').find('td.active').next().addClass("active");
    $('tr#Player1').find('td.active').first().removeClass("active");
    var celda = $('tr#Player1').find("#num_tab_99").attr("class");
    // console.log(celda);
    if ( celda === "active"){
      // console.log(stop1);
      // console.log(celda);
      detenido1 = true;
      return clearTimeout(stop1);
      // detenidos();
    };
    stop1 = setTimeout(throw_coin1, 50);
  };

  function throw_coin2(value){
    $('tr#Player2').find('td.active').next().addClass("active");
    $('tr#Player2').find('td.active').first().removeClass("active");
    var celda2 = $('tr#Player2').find("#num_tab_99").attr("class");
    // console.log(celda2);
    if ( celda2 === "active"){
      // console.log(stop1);
      // console.log(celda2);
      detenido2 = true;
      return clearTimeout(stop2);
      // detenidos();
    };
    stop2 = setTimeout(throw_coin2, 50);
  };

  function detenidos(){
    if (detenido1 == true && detenido2 == true){
      comparar();
    };
  };

  function comparar(){
  
    marca1 = $('tr#Player1').find('td.active').attr("id");
    marca2 = $('tr#Player2').find('td.active').attr("id");
    num_cell_1 = marca1.split("_")[2];
    num_cell_2 = marca2.split("_")[2];
  
    if(num_cell_1 > 90 && num_cell_2 > 90){
      $("tr").find('td').css("background-color", "red");
      $("tr#Player1").find('td.active').css("background-color", "black");
      $("tr#Player2").find('td.active').css("background-color", "black");
      $("#score").html("Los dos jugadores perdieron"); 
      
    } else if (num_cell_1 > num_cell_2 && num_cell_1 < 90){
      $("tr#Player1").find('td').css("background-color", "cyan");
      $("tr#Player1").find('td.active').css("background-color", "black");
      $("#score").html("Gano el jugador 1!");
           
    } else if (num_cell_2 > num_cell_1 && num_cell_2 < 90){
      $("tr#Player2").find('td').css("background-color", "cyan");
      $("tr#Player2").find('td.active').css("background-color", "black");
      $("#score").html("Gano el jugador 2!");
      
    } else if (num_cell_1 >= 90){
      $("tr#Player2").find('td').css("background-color", "cyan");
      $("tr#Player2").find('td.active').css("background-color", "black");
      $("#score").html("Gano el jugador 2!");
      
    } else if (num_cell_2 >= 90){
      $("tr#Player1").find('td').css("background-color", "cyan");
      $("tr#Player1").find('td.active').css("background-color", "black");
      $("#score").html("Gano el jugador 1!");
    
    } else if (num_cell_2 = num_cell_1){
      $("#score").html("Es empate!");
      
    };
  };

});//no comentar es del ready

 function contador() {
    console.log("start");
    setTimeout(function(){$("#mensaje").html("3");},3000);
    console.log("3");
    setTimeout(function(){$("#mensaje").html("2");},3000);
    console.log("2");
    setTimeout(function(){$("#mensaje").html("1");},3000);
    console.log("1");
  };  

