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
V.uicalendar.createEvents( M.getEvents('mmi2') );
V.uicalendar.createEvents( M.getEvents('mmi3') );

/* 
  V.updateColor

  Paramètre 1 : calendrier
  Paramètre 2 : couleur du texte
  Paramètre 3 : couleur background
  Paramètre 4 : couleur bordure
  Paramètre 5 : couleur au drag
*/

V.updateColor('mmi1', '#FFFFFF', '#640900', '#FFFFFF', '#980A00')

V.updateColor('mmi2', '#FFFFFF', '#002464', '#FFFFFF', '#003696')

V.updateColor('mmi3', '#FFFFFF', '#096400', '#FFFFFF', '#0C8600')



let C = {};


C.init = function(){
    V.init();
    
}

C.init();
