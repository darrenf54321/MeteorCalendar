Session.setDefault('editing_calevent', null);

// Shows event details in editing function:
Template.editEvent.evt = function(){
	var calEvent = CalEvents.findOne({_id:Session.get('editing_calevent')});
	return calEvent;
}

// Allows event details to be saved or deleted in editing function
var updateCalendar = function(){
	$('#calendar').fullCalendar( 'refetchEvents' );
}

// Allows event details to be saved or deleted in editing function
Template.editEvent.events({
	'click .save':function(evt,tmpl){
		updateCalEvent(Session.get('editing_calevent'),tmpl.find('.title').value, tmpl.find('.assignee').value, tmpl.find('[name="completeStatus"] option:selected').value,);
		Session.set('editing_calevent',null);
		$('#EditEventModal').modal("hide");
	},
	'click .close':function(evt,tmpl){
		Session.set('editing_calevent',null);
		$('#EditEventModal').modal("hide");
	}	,
	'click .remove':function(evt,tmpl){
		removeCalEvent(Session.get('editing_calevent'));
		Session.set('editing_calevent',null);
		$('#EditEventModal').modal("hide");
	},
	// sets status function to pending
	'click .complete':function(evt,tmpl){
		completeCalEvent(Session.get('editing_calevent'), tmpl.find('.title').value, tmpl.find('[name="completeStatus"] option:selected').value,);
		Session.set('editing_calevent',null);
		$('#EditEventModal').modal("hide");
	}
})

var updateCalEvent = function(id,title, assignee, completeStatus){
	CalEvents.update(id, {$set: {title:title}});
	CalEvents.update(id, {$set: {assignee:assignee}});
	CalEvents.update(id, {$set: {completeStatus:completeStatus}});
	updateCalendar();
}

var removeCalEvent = function(id,title){
	CalEvents.remove({_id:id});
	updateCalendar();
}
