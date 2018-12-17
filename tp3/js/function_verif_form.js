$(document).ready(function () {
$("#submit").on("click", function (event) {

        //récupérer les champs de formulaire 
        var 
        $name=$("#name"),
        $firstname = $("#firstname"),
        $date = $("#date"),
        $adress = $("#adress"),
        $mail = $("#mail");

        //Appeler la fonction verifier(_champ)  
        if(verifier($name)&&verifier($firstname)&&verifier($date)&&verifier($adress)&&verifier($mail)) {   
            return true;
            /* var contact = { name: _name,
                firstname: _firsname,
                date: _date,
                adress: _adress,
                mail: _mail
            };
            return contact;/**/
        
        }
           
        else{
            alert(" les champs sont vides ")
        }
        //fonction pour vérifier la validité des champs 
        function verifier(_champ) {
            if (_champ.val() == "") {
                false;
            }
            else {
            return true;
            }
        }
        });
        });