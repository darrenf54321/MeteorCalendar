
Template.calendar.rendered = function(){
	$('#client-name').text(getCurrentClientName()),
	$('#calendar').fullCalendar({
		header:{
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},

		dayClick:function( date, allDay, jsEvent, view) {
			CalEvents.insert({title:'New Item',start:date,end:date,assignee:'Assignee',completeStatus:"Pending",client_id: getCurrentClient(),client_name:getCurrentClientName()});
			updateCalendar();
		},

		eventClick:function(calEvent,jsEvent,view){
			Session.set('editing_calevent',calEvent.id);
			$('#EditEventModal').modal("show");
		},
		eventDrop:function(calEvent){
			CalEvents.update(calEvent.id, {$set: {start:calEvent.start,end:calEvent.end}});
			updateCalendar();
		},
		events: function(start, end, callback) {

			var events = [];
			calEvents = CalEvents.find();
			calEvents.forEach(function(evt){
				if(evt.client_id === getCurrentClient()){
					events.push({	id:evt._id,title:evt.title,start:evt.start,end:evt.end,assignee:evt.assignee,completeStatus:evt.completeStatus});
				}
			})

			callback(events);
		},
		eventRender( event, element ) {
      element.find( '.fc-event-title' ).html(
        `<span>${ event.title }</span></br>
				 <span>Assignee: ${ event.assignee}</span></br>
         <span class="status-${ event.completeStatus }">${ event.completeStatus }</span>
        `
      );
    },
		editable:true
	});

	Tracker.autorun( () => {
		CalEvents.find().fetch();
		$( "#calendar" ).fullCalendar( 'refetchEvents' );
	});
}
// var removeCalEvent = function(id,title){
// 	CalEvents.remove({_id:id});
// 	updateCalendar();
// }

// var updateCalEvent = function(id,title, assignee, completeStatus){
// 	CalEvents.update(id, {$set: {title:title}});
// 	CalEvents.update(id, {$set: {assignee:assignee}});
// 	CalEvents.update(id, {$set: {completeStatus:completeStatus}});
// 	updateCalendar();
// }

function getCurrentClient() {
  return Session.get('currentClient');
}

function getCurrentClientName() {
  return Session.get('currentClientName');
}
