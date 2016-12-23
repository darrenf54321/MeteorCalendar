Clients = new Mongo.Collection('clients');

Client = new SimpleSchema({
    name: {
        type: String,
        label: "Client Name"
    },
    streetName: {
        type: String,
        label: "Street Name"
    },

});

Clients.attachSchema(Client);
