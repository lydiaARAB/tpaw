$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     //Déclarer les variables : 
    
       
     $("#submit").on("click",function(event){ 
       //Récuperer tous les chmaps de formulaires 
      var  $nom=$("#nom"),
           $prenom=$("#prenom"),
           $date_nais=$("#date_nais"),
           $adresse=$("#adresse"),
           $email=$("#email");
          
    
      if(verifier($nom)&& verifier($prenom) &&verifier($date_nais)&&
      verifier($adresse) &&verifier($email))
      {
        $('#myModel').modal('show');
      } 
      //cette fonction permet de verifier si tous les champs sont valide
      function verifier(_champ){
        if(_champ.val()=="") {
         return false
        
        }
        else {
          return true; 
        }
      }
      });
      
     

       
        
        });
        