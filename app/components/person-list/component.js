import Ember from 'ember';

const {
  Component,
  assert,
} = Ember;

export default Component.extend({
  tagName: 'ul', // outer tag that contains component; div by default
  classNames: ['person-list'],
  // people: [], // this is wrong, will be shared among all components on the page
  people: null, // setting a default

  init() {
    this._super(...arguments);
    this.people = this.people || [];
    assert('Must pass favorite person', this.favoritePerson);
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
