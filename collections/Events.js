CalEvents = new Mongo.Collection('calevents');

let TasksSchema = new SimpleSchema({
  'title': {
    type:   String,
    label:  "The name of the task."
  },
  'start': {
    type:   String,
    label:  "When this task is due."
  },
  'assignee': {
    type:   String,
    label:  "Participant responsible for task."
  },
  'completeStatus': {
    type: String,
    label: 'Is the event complete?',
    allowedValues: [ 'Pending', 'Complete' ]
  },
  'createdBy': {
    type:   String,
    label:  "Administrator",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  'client_id': {
    type:   String,
    label:  "client_id",
    autoform: {
      type: "hidden"
    }
  },
  'client_name': {
    type:   String,
    label:  "client_name",
    autoform: {
      type: "hidden"
    }
  }

});

CalEvents.attachSchema( TasksSchema );
