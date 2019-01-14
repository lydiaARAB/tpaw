/*
store.js
Script pour gérer la liste de contact en JSON
Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
//Fonction pour vérifier la validité de formulaire


var contactStore = (function () {
    
    // variable privée ; list vide 
    var contactList = [];

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block

    return {
        add: function (_name, _firsname, _birth, _adresse, _mail) {
            var contact = {
                name: _name,
                firstname: _firsname,
                birth: _birth,
                adresse: _adresse,
                mail: _mail
            };
            // ajout du contact à la liste
            contactList.push(contact);
            return contactList;
        },
        //Listing des contacts 
        getList: function () {
            return contactList;
        }

    }
    


})();