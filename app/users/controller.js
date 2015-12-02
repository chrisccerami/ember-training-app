import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    setAsFavorite(person) {
      this.set('model.favoritePerson', person)
    }
  }
});
