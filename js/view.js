import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

let V = {};

V.init = function(){
  let week = document.querySelector('#move');
  week.addEventListener('click',  V.handler_clickOnWeek );

  
  let viewStyle = document.querySelector('#view');
  viewStyle.addEventListener('click',  V.handler_clickOnView );

    
  
}

let colorMap = {
  mmi1: {
    TP: '#FF968C' , TD :'#8D342B' , CM:'#760F04', others:'#640900'
  },

  mmi2: {
    TP: '#8CB5FF' , TD :'#3B64AF' , CM:'#083078', others:'#002464'
  },

  mmi3: {
    TP: '#83FF77' , TD :'#44B839' , CM:'#177B0D', others:'#096400'
  }
}

V.uicalendar = new Calendar('#calendar', {
  defaultView: 'month',
  isReadOnly: true,
  usageStatistics: false,
  useDetailPopup: true,
 
  week: {
    startDayOfWeek: 1,
    dayNames: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    workweek: true,
    hourStart: 8,
    hourEnd: 20,
    taskView: false,
    eventView: ['time'],
  },
  theme: {
    common: {
      backgroundColor: 'white',
    }, 
    week : {
      dayName: {
        border: '2px solid rgb(100, 100, 100)',
        backgroundColor: 'white',
        color: 'rgb(150, 150, 150)',
      },
      today: {
        color: 'blue',
      },
    },
  },
  // month: {
  //   startDayOfWeek: 1,
  //   dayNames: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  //   visible: true
  // },
  template: {
    time: function(event) {
      return `<span style="color: white;">${event.title}</span>`;
    }
  },
 
 
});




/* 
V.handler_clickOnWeek 

Fonction qui change la semaine par précédente / en cours / suivante

ev : objet cliqué

*/

V.handler_clickOnWeek = function(ev){
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

/* 
V.handler_clickOnView 

Fonction qui change la vue par mois/semaine/jour

ev : objet cliqué

*/

V.handler_clickOnView = function(ev){
  if(ev.target.tagName == "BUTTON"){
    V.uicalendar.changeView(ev.target.id);

    localStorage.removeItem("view");

    localStorage.setItem("view", ev.target.id);
  }

}


/* 
V.courseColor

Fonction qui change la couleur d'un tableau d'événements selon la colorMap

objectevents : tableau d'événements

*/

V.courseColor = function(objectevents) {
 
  for (let event of objectevents) { 
    event.backgroundColor = colorMap[event.calendarId][event.type]
    
  };

 
};

/* 
V.userDevice 

Fonction qui change la vue en fonction de la largeur de l'écran 
(format téléphone -> jour)
(format desktop -> semaine)

*/

V.userDevice = function(){
  if (window.innerWidth <= 500) {
    V.uicalendar.changeView('day')
  } 
  else {
    V.uicalendar.changeView('week')
  }
}

export { V };
