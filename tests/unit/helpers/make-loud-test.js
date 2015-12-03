import { makeLoud } from '../../../helpers/make-loud';
import { module, test } from 'qunit';

module('Unit | Helper | make loud');

test('it works without a hash', function(assert) {
  let result = makeLoud(["string"]);

  assert.equal(result, "STRING");
});

test('it works with the bold option', function(assert) {
  let string = "string";
  let result = makeLoud([string], {format: "bold"});

  assert.equal(result.string, `<strong>${string}</strong>`);
});
