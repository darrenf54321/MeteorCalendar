if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('compliance-client');
    });

    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout', { main: 'Clients'});
    }
});

FlowRouter.route('/create-client', {
    name: 'create-client',
    action() {
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('HomeLayout', { main: 'CreateClient'});
    }
});

FlowRouter.route('/compliance-client', {
    name: 'compliance-client',
    action() {
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('MainLayout', { main: 'Calendar' });
    }
});

FlowRouter.route('/tasks', {
    name: 'tasks',
    action() {
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('MainLayout', { main: 'Tasks' });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render('HomeLayout', { main: 'login' });
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action: function() {
        BlazeLayout.render('HomeLayout', { main: 'register' });
    }
});

FlowRouter.route('/logout', {
  name: 'logout',
  action: function() {
    Accounts.logout();
    FlowRouter.go('/');
  }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action: function() {
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('MainLayout', { main: 'profile' });
    }
});
