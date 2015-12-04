import { test } from 'qunit';
import moduleForAcceptance from 'ember-training/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user visits list of users');

test('user goes to a list of users', function(assert) {
  visit('/users');

  let firstUser;
  let firstUserAfterPageChange;

  andThen(function() {
    firstUser = find('.person:first-child').text().trim();
    assert.equal(find('button:contains(Previous)[disabled]').length, 1, 'previous button should be disabled on page 1');
    assert.equal(currentURL(), '/users');
  });

  click('button:contains(Next)');

  andThen(function() {
    firstUserAfterPageChange = find('.person:first-child').text().trim();
    assert.equal(find('button:contains(Previous)[disabled]').length, 0, 'previous button should not be disabled after page 1');
    assert.notEqual(firstUser, firstUserAfterPageChange, "going to next page should show different names");
    assert.equal(currentURL(), '/users?page=2');
  });

  click('button:contains(Previous)');

  andThen(function() {
    firstUserAfterPageChange = find('.person:first-child').text().trim();
    assert.equal(find('button:contains(Previous)[disabled]').length, 1, 'previous button should be disabled on page 1');
    assert.equal(firstUser, firstUserAfterPageChange, "going to previous page should show original names");
    assert.equal(currentURL(), '/users');
  });
});
