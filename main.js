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



let C = {};


C.init = function(){
    V.init();

    let year = document.querySelector('#year');
    year.addEventListener('click',  C.handler_clickOnYear );

    let groups = document.querySelector('#groups');
    groups.addEventListener('change',  C.handler_changeOnGroup );

    let input = document.querySelector('#search');
    input.addEventListener('keyup', C.handler_keyUpSearch);


    let all = M.getConcatEvents()
    V.courseColor(all)
    V.uicalendar.createEvents(all);
    V.userDevice()

 
    if(!localStorage.getItem("group") && localStorage.getItem("year") != undefined){
      let year = JSON.parse(localStorage.getItem("year"));
      V.uicalendar.clear();
      V.courseColor(year);
      V.uicalendar.createEvents(year);

    }

    if(!localStorage.getItem("year") && localStorage.getItem("group") != undefined){
      let group = JSON.parse(localStorage.getItem("group"));
      V.uicalendar.clear();
      V.courseColor(group);
      V.uicalendar.createEvents(group);
    } 

    if(localStorage.getItem("view") != undefined){
      let view = localStorage.getItem("view");
      V.uicalendar.changeView(view)
    } 


    

      
    
}

/* 
C.handler_changeOnGroup

Fonction qui affiche le calendrier d'un groupe selon un élément sélectionné

ev : objet sélectionné

*/

C.handler_changeOnGroup = function(ev){
  let allEvents = M.getConcatEvents();
  
  let eventsByGroup = [];

    for (let event of allEvents){
      if(event.groups.includes(ev.target.value)){
        eventsByGroup.push(event);
      }
  
    }

  localStorage.removeItem("group");
  localStorage.removeItem("year");

  localStorage.setItem("group",  JSON.stringify(eventsByGroup));

  V.uicalendar.clear()
  V.courseColor(eventsByGroup)
  V.uicalendar.createEvents(eventsByGroup)

  
}

/* 
C.handler_changeOnYear

Fonction qui affiche le calendrier d'une année de formation selon un élément sélectionné

ev : objet sélectionné

*/

C.handler_clickOnYear = function(ev){
  if(ev.target.tagName =="INPUT"){
    let allEvents = M.getConcatEvents();
  
    let eventsByYear = [];

    let years = document.querySelectorAll('#year li input')
 
    for(let y of years){
      if(y.checked == true){
        for (let event of allEvents){
          if(event.calendarId == y.id){
            eventsByYear.push(event);
          }
        }
      }
    }

    localStorage.removeItem("year");
    localStorage.removeItem("group");
    
    localStorage.setItem("year", JSON.stringify(eventsByYear));
      
    V.uicalendar.clear()
    V.courseColor(eventsByYear)
    V.uicalendar.createEvents(eventsByYear)
        
  }

}

/* 
C.handler_keyUpSearch

Fonction qui affiche le calendrier selon des critères de recherche

ev : chaine entré

*/

C.handler_keyUpSearch = function(ev){

  let value = ev.target.value;
  
  let eventsByText = M.filterEventsByText(value);

  V.uicalendar.clear()
  V.courseColor(eventsByText)
  V.uicalendar.createEvents(eventsByText)
    
}


C.init();
