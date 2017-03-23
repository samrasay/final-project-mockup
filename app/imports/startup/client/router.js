import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/add-schedule', {
  name: 'Add_Schedule_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Schedule_Page' });
  },
});

FlowRouter.route('/gym-hours', {
  name: 'Gym_Hours_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Gym_Hours_Page' });
  },
});

FlowRouter.route('/machines-open', {
  name: 'Machines_Open_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Machines_Open_Page' });
  },
});

FlowRouter.route('/log-page', {
  name: 'Log_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Log_Page' });
  },
});

FlowRouter.route('/workout-schedule-page', {
  name: 'Workout_Schedule_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Workout_Schedule_Page' });
  },
});


FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
