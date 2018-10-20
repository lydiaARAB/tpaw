
function validation(){
    var nom=document.getElementById("nom").value.length;
    var prenom=document.getElementById("prenom").value.length;
    var date_naissance=document.getElementById("date_naissance").value.length;
    var adresse=document.getElementById("adresse").value.length;
    var mail =document.getElementById("mail").value.length;

if (nom<5) {
    
    var d= document.querySelector("#error1");
    d.style.backgroundColor='rgb(182, 82, 137)';
    d.style.padding='5px';
    d.style.border='1px black';
    document.getElementById("p1").innerHTML="la saisie du nom est obligatoire ! "
    
} else {
    if (prenom<5) {
        var d= document.querySelector("#error2");
        d.style.backgroundColor='rgb(182, 82, 137)';
        d.style.padding='5px';
        d.style.border='1px black';
        document.getElementById("p2").innerHTML="la saisie du prenom est obligatoire ! ";
        
    } else {
        if (adresse<5) {
            var d= document.querySelector("#error3");
            d.style.backgroundColor='rgb(182, 82, 137)';
            d.style.padding='5px';
            d.style.border='1px black';
            document.getElementById("p3").innerHTML="la saisie  d'adresse est obligatoire ! "
    } else {
        if (mail<5) {
            var d= document.querySelector("#error4");
            d.style.backgroundColor='rgb(182, 82, 137)';
            d.style.padding='5px';
            d.style.border='1px black';
            document.getElementById("p4").innerHTML="la saisie de mail est obligatoire ! "
    
        } else {
            if (date_naissance<5) {
                var d= document.querySelector("#error5");
                d.style.backgroundColor='rgb(182, 82, 137)';
                d.style.padding='5px';
                d.style.border='1px black';
                document.getElementById("p5").innerHTML="la saisie de la date de naissancee est obligatoire ! ";
            } else {
                var d= document.querySelector("#resultat");
                d.style.backgroundColor='rgb(0, 128, 0)';
                d.style.padding='5px';
                var t=  document.getElementById("txt");
                t.style.color="rgb(255, 255, 255)";
                t.innerHTML="Bienvenue"+" "+document.querySelector("#prenom").value; 
            }
            
        }
        
    }
        
    }
    
}

}
