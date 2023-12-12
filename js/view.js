import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

let V = {};

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

V.handler_clickOnYear = function(ev){
  if(ev.target.tagName =="INPUT"){
    if (ev.target.checked == false){
      V.uicalendar.setCalendarVisibility(ev.target.id, false);
      
      console.log('not checked')
      
    }
    if (ev.target.checked == true){
      V.uicalendar.setCalendarVisibility(ev.target.id, true);

      console.log('checked')
    }
    
  }

}



V.updateColor = function(cal, col, bg, border, drag){
  V.uicalendar.setCalendarColor(cal, {
    color: col,
    backgroundColor: bg,
    borderColor: border,
    dragBackgroundColor: drag,
  });
}



export { V };
