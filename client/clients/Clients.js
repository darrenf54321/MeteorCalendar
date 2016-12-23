Meteor.subscribe('clients');

Template.Clients.helpers({
    clients: () => {
        return Clients.find()
    }
});

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('LL');
});

Template.Clients.events({
  'click .client': function() {
    Session.set('currentClientName', this.name);
    Session.set('currentClient', this._id);
  }
});
