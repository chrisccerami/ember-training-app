import Ember from 'ember';
import EnvironmentMixin from '../../../mixins/environment';
import { module, test } from 'qunit';

module('Unit | Mixin | environment');

test('it returns true when not in production', function(assert) {
  let EnvironmentObject = Ember.Object.extend(EnvironmentMixin);
  let subject = EnvironmentObject.create();

  let result = subject.isDevelopment;
  assert.ok(result);
});
