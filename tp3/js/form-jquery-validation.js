$(document).ready(function () {
  $("#submit").on("click", function (event) {
    //Récuperer tous les chmaps de formulaires 
    var $nom = $("#nom"),
      $prenom = $("#prenom"),
      $date_nais = $("#date_nais"),
      $adresse = $("#adresse"),
      $email = $("#email");

    //Appeler la fonction qui valide les champs 
    if (verifier($nom) && verifier($prenom) && verifier($date_nais) &&
      verifier($adresse) && verifier($email)) {
      $(".modal-title").text("Bienvenue " + $prenom.val());
      var $lien = "http://maps.google.com/maps?q="+ $adresse.val();
      var $apiKey="AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
      var $map = "https://maps.googleapis.com/maps/api/staticmap?markers="+ $adresse.val() +"&zoom=10&size=400x300&key=" + $apiKey;
      $(".modal-body").html('<p>vous êtes né le ' + $date_nais.val() + ' et vous habitez à <a href="'+$lien+'"><img src="'+ $map +'"></a></p> <a href='+$lien+'>'+$adresse.val()+'</a>');  
      $('#myModal').modal('show');
    }
    else {
      $(".modal-title").text("Message d'erreur ");
      $(".modal-body").html("<p>Veuillez remplir tous champs svp.</p>");
      $('#myModal').modal('show');
    }
    //cette fonction permet de verifier si tous les champs sont valide
    function verifier(_champ) {
      if (_champ.val() == "") {
 
      }
      else {
        return true;
      }
    }
  });
});








