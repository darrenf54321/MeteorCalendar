
// Change all Events to Calendar as template changed????
Meteor.publish( 'events', function() {
  return Events.find();
});

Meteor.publish('tasks', function() {
    return Tasks.find();
});

Meteor.publish('clients', function() {
    return Clients.find();
});
