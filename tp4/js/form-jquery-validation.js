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

  $("#submit").on("click", function () {
    var
        name = document.querySelector("#name").value,
        firstname = document.querySelector("#firstname").value,
        date = document.querySelector("#birth").value,
        adress = document.querySelector("#adresse").value,
        mail = document.querySelector("#mail").value;

        contactStore.add(name, firstname, date, adress, mail);
        contactList = contactStore.getList();
        document.querySelector("table tbody").innerHTML = "";
        for (var index in contactList) {
          document.querySelector("table tbody").innerHTML =document.querySelector("table tbody").innerHTML +
          '<td>' +contactList[index].name + 
          '</td><td>' + contactList[index].firstname+ 
          '</td><td>'+contactList[index].date+
          '</td><td>'+contactList[index].adress+
          '</td><td>'+contactList[index].mail+'</td>';
         
      }
    
});

var geocoder = new google.maps.Geocoder;
var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};

geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
       
       $("#adresse").val(results[0].formatted_address);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });

});


