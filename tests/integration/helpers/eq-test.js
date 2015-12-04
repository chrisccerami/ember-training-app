import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eq', 'Integration | Helper | eq', {
  integration: true
});

test('it works as a subexpression when true', function(assert) {
  this.render(hbs`
    {{#if (eq 1 1)}}
      hi
    {{/if}}
  `);
  assert.ok(this.$().text().trim().match(/hi/));
});

test('it works as a subexpression when false', function(assert) {
  this.render(hbs`
    {{#if (eq 1 2)}}
      hi
    {{/if}}
  `);
  assert.notOk(this.$().text().trim().match(/hi/));
});

test('it works when true', function(assert) {
  this.render(hbs`{{eq 1 1}}`);
  assert.equal(this.$().text().trim(), "true");
});

test('it works when false', function(assert) {
  this.render(hbs`{{eq 1 2}}`);
  assert.equal(this.$().text().trim(), "false");
});
