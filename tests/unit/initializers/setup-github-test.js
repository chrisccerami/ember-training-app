import Ember from 'ember';
import SetupGithubInitializer from '../../../initializers/setup-github';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | setup github', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SetupGithubInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
