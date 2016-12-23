Meteor.subscribe('tasks');

Template.Tasks.helpers({
    tasks: () => {
        return CalEvents.find({});
    }
});

Template.Tasks.events({
  'click .toggle-checked'() {
    CalEvents.update(this._id, {
      $set: { completed: ! this.completed },
    });
  },
});

Template.registerHelper('formatDate', function(start) {
    return moment(start).format('LL');
});
