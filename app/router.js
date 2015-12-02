import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', {}, function() {});
  this.route('change-greeting');
});

export default Router;
