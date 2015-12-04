import { test } from 'qunit';
import moduleForAcceptance from 'ember-training/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user visits root');

test('should transition to /users', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
});
