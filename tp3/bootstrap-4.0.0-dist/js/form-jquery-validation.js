$( document ).ready(function() {    
     $("#submit").on("click",function(event){ 
       //Récuperer tous les chmaps de formulaires 
      var  $nom=$("#nom"),
           $prenom=$("#prenom"),
           $date_nais=$("#date_nais"),
           $adresse=$("#adresse"),
           $email=$("#email");
          
      //Appeler la fonction qui valide les champs 
      if(verifier($nom)&& verifier($prenom) &&verifier($date_nais)&&
      verifier($adresse) &&verifier($email))
        {
          $('#myModal').modal('show');
        } 
        else{
          $('#myModal').modal('show');
        }
      //cette fonction permet de verifier si tous les champs sont valide
      function verifier(_champ){
        if(_champ.val()=="") {
         return false;  
        }
        else {
          return true; 
        }
      }
      });
        });
        