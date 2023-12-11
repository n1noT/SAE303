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

V.init = function(){
    let menu = document.querySelector('nav');
    menu.addEventListener('click',  C.handler_clickOnWeek );

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


V.updateColor = function(cal, col, bg, border, drag){
  V.uicalendar.setCalendarColor(cal, {
    color: col,
    backgroundColor: bg,
    borderColor: border,
    dragBackgroundColor: drag,
  });
}

export { V };
