
function validation(){
    var nom=document.getElementById("nom").value.length;
    var prenom=document.getElementById("prenom").value.length;
    var date_naissance=document.getElementById("date_naissance").value.length;
    var adresse=document.getElementById("adresse").value.length;
    var mail =document.getElementById("mail").value.length;

    if( validateItem("nom", "error1")    && 
        validateItem("prenom", "error2") &&
        validateItem("adresse","error3")  &&
        validateItem("mail","error4")    &&
        validateItem("date_naissance","error5") )
    {
        var d= document.querySelector("#resultat");
        d.style.backgroundColor='rgb(0, 128, 0)';
        d.style.padding='3px';
        d.style.color="rgb(255, 255, 255)";
        d.innerHTML="Bienvenue"+" "+document.querySelector("#prenom").value; 
    }



    function validateItem(_id, _idError){

        
        var el = document.querySelector("#"+_id);
        var label = document.querySelector('[for="'+_id+'"]');
        var error= document.querySelector("#"+_idError);
        if (el.value.length<5) {
            
            error.style.backgroundColor='rgb(182, 82, 137)';
            error.style.padding='5px';
            error.style.border='1px black';
            error.innerHTML="la saisie de "+ label.textContent +" est obligatoire ! ";
            return false;
        } else { 
           error.style.backgroundColor=" #e9ebee";
           error.innerHTML="";
            return true;
        }
    
    }
}




