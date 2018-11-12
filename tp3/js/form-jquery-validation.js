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
      $("#p").text("Vous etes nés le " + $date_nais.val() + " et vous habitez ")
      $("#img").html('<img src="https://maps.googleapis.com/maps/api/staticmap?markers=paris&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"></img>');
      $("#lien").text($adresse.val());
      $('#myModal').modal('show');
    }
    else {
      $("#img").html("");
      $("#lien").text("");
      $(".modal-title").text("Message d'erreur ");
      $("#p").text("Veuillez remplir tous champs svp.");
      $('#myModal').modal('show');
    }
    //cette fonction permet de verifier si tous les champs sont valide
    function verifier(_champ) {
      if (_champ.val() == "") {
        return false;
      }
      else {
        return true;
      }
    }
  });
});
