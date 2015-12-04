import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('make-loud', 'Integration | Helper | make-loud', {
  integration: true
});

test('it prints strong if format bold', function(assert) {
  this.render(hbs`{{make-loud 'chris' format='bold'}}`);
  assert.equal(this.$().html(), "<strong>chris</strong>");
});

test('it prints in caps if format not bold', function(assert) {
  this.render(hbs`{{make-loud 'chris'}}`);
  assert.equal(this.$().text(), "CHRIS");
});
