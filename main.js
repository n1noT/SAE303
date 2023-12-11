import { M } from "./js/model.js";
import { V } from "./js/view.js";

/*
   Ce fichier correspond au contrôleur de l'application. Il est chargé de faire le lien entre le modèle et la vue.
   Le modèle et la vue sont définis dans les fichiers js/model.js et js/view.js et importés (M et V, parties "publiques") dans ce fichier.
   Le modèle contient les données (les événements des 3 années de MMI).
   La vue contient tout ce qui est propre à l'interface et en particulier le composant Toast UI Calendar.
   Le principe sera toujours le même : le contrôleur va récupérer les données du modèle et les passer à la vue.
   Toute opération de filtrage des données devra être définie dans le modèle.
   Et en fonction des actions de l'utilisateur, le contrôleur pourra demander au modèle de lui retourner des données filtrées
   pour ensuite les passer à la vue pour affichage.

   Exception : Afficher 1, 2 ou les 3 années de formation sans autre filtrage peut être géré uniquement au niveau de la vue.
*/
   

// loadind data (and wait for it !)
await M.init();


// creating events in the calendar
V.uicalendar.createEvents( M.getEvents('mmi1') );




V.init = function(){
    let menu = document.querySelector('nav');
    menu.addEventListener('click',  C.handler_clickOnWeek );
}

let C = {};


C.init = function(){
    V.init();
    // let hp = M.getData('principe');
    
}

C.handler_clickOnWeek = function(ev){
    if ( ev.target.id == 'prev'){
        V.uicalendar.prev();
    }

    if ( ev.target.id == 'current'){
      V.uicalendar.today();
    }

    if ( ev.target.id == 'next'){
      V.uicalendar.next();
    }
    

}


C.init();
