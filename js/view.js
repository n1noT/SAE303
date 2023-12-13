import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

let V = {};

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
  defaultView: 'week',
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
  template: {
    time: function(event) {
      return `<span style="color: white;">${event.title}</span>`;
    }
  },
 
 
});

V.userDevice = function(){
  if (window.innerWidth <= 500) {
    V.uicalendar.changeView('day')
  } 
  else {
    V.uicalendar.changeView('week')
  }
}






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

V.handler_clickOnView = function(ev){
  if ( ev.target.id == 'mois'){
      V.uicalendar.changeView('month');
  }

  if ( ev.target.id == 'semaine'){
      V.uicalendar.changeView('week');
  }

  if ( ev.target.id == 'jour'){
      V.uicalendar.changeView('day');
  }   
  

}

/* 
V.courseColor

objectevents : tableau d'événements

*/

V.courseColor = function(objectevents) {
 
  for (let event of objectevents) { 
    event.backgroundColor = colorMap[event.calendarId][event.type]
  
  };

 
};



// V.updateColor = function(cal, col, bg, border, drag){
//   V.uicalendar.setCalendarColor(cal, {
//     color: col,
//     backgroundColor: bg,
//     borderColor: border,
//     dragBackgroundColor: drag,
//   });
// }



export { V };
