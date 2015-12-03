import Ember from 'ember';
import config from '../config/environment';

const {
  computed
} = Ember;

export default Ember.Mixin.create({
  isDevelopment: computed(function() {
    return config.environment !== 'production';
  }).volatile()
});
