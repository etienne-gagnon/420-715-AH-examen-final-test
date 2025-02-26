
let existingUserId = false;

function deleteContact(userId){
    
     fetch('/api/get-contacts')
     .then((response) => response.text())
     .then((body) => {
         let response = JSON.parse(body);
         let iteration = 1;
         response.forEach(contact => {
             
             if(parseInt(contact.id) == parseInt(userId)) {
                 existingUserId = true;
                    if(userId === undefined){
                         alert("Le userId n'est pas défini");
                         return;
                    }else if(typeof userId == "string"){
                         alert("Le userId n'est pas valide");
                         return;
                    }else if(existingUserId !== true){
                         alert("Le userId n'existe pas");
                    }else{
                         let confirmed = confirm("Êtes-vous certain de vouloir supprimé ce contact ?");
                         if(confirmed){
                         window.location.href='delete-contact?id='+userId;
                         }else{
                         window.location.href='/';
                         }
                    }
                 return;
             }else{
                 if(response.length === iteration) {
                     window.location.href = '/';
                 }
             }
             iteration++;
         });
         
     });

}