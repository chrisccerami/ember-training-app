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

  activate() {
     console.log('activate');
   },

   beforeModel() {
     console.log('beforeModel');
   },

   model() {
       let greeting = this.get('greeting');
       let people = this.get('github').request('repos/chrisccerami/mars-photo-api/stargazers');

       return RSVP.hash({
         greeting,
         people,
         repoInfo: this.get('github').request('repos/emberjs/ember.js')
       })
       .catch(() => {
         alert('oops');
       });
     },

   afterModel(model) {
     model.favoritePerson = model.people[0];
   }
});
