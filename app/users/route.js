import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

const {
  service
} = Ember.inject;

export default Route.extend({
  greeting: service(),

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  activate() {
     console.log('activate');
   },

   beforeModel() {
     console.log('beforeModel');
   },

   model(params) {
     let greeting = this.get('greeting');
     let people = this.get('github').request('repos/emberjs/ember.js/stargazers', params);

     return RSVP.hash({
       greeting,
       people,
       repoInfo: this.get('github').request('repos/emberjs/ember.js')
     });
   },

   afterModel(model) {
     model.favoritePerson = model.people[0];
   }
});
