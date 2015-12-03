import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('github').request(`users/${params.login}`);
  }
});
