$(document).ready(function () {
   /*Intercepter le click de button de localiqation et appeler la fonction */ 
   
    $("#gps").on("click", function () {
        getLocation();
    });

//fonction pour calculer le nbres de car de prenom et nom 
    nbr_car_prenom = 0;
    $("#firstname").keypress(function(){
    $("#prenom").text(nbr_car_prenom += 1);  
  });

    nbr_car_nom = 0;
    $("#name").keypress(function(){
    $("#nom").text(nbr_car_nom += 1);
  });


});


