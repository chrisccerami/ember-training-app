import { eq } from '../../../helpers/eq';
import { module, test } from 'qunit';

module('Unit | Helper | eq');

// Replace this with your real tests.
test('returns true when equal', function(assert) {
  let result = eq([1, 1]);

  assert.ok(result);
});

test('returns false when inequal', function(assert) {
  let result = eq([1, 2]);

  assert.notOk(result);
});
