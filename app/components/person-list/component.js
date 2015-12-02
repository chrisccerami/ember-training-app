import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul', // outer tag that contains component; div by default
  // people: [], // this is wrong, will be shared among all components on the page
  people: null, // setting a default

  init() {
    this._super(...arguments);
    this.people = this.people || [];
  },

  didReceiveAttrs() {
    console.log('got attrs');
  },

  actions: {
    setAsFavorite(person) {
      this.attrs.onFavorite(person);
    }
  }
});
