import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ErrorStacktrace from '../../../../components/error-stacktrace/component';

moduleForComponent('error-stacktrace', 'Integration | Component | error stacktrace', {
  integration: true
});

test('it renders when in development mode', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
  this.set('model',
    {errors: [{title: "Title", status: "404"}],
    stack: "Stack"
  });

  this.render(hbs`{{error-stacktrace model=model}}`);

  assert.ok(this.$('.stacktrace').text().trim().match(/running in development/), "should be in development mode");
  assert.ok(this.$('.stacktrace').text().trim().match(/Stack/), "should display the stack trace");
  assert.ok(this.$('.stacktrace').text().trim().match(/404/), "should display the error status");
});

test('it does not render when not in development mode', function(assert) {
  ErrorStacktrace.reopen({
    isDevelopment: false
  });

  this.set('model',
    {errors: [{title: "Title", status: "404"}],
    stack: "Stack"
  });

  this.render(hbs`{{error-stacktrace model=model}}`);

  assert.notOk(this.$('.stacktrace').text().trim().match(/running in development/), "should not be in development");
  assert.notOk(this.$('.stacktrace').text().trim().match(/Stack/), "should not show the stacktrace");
  assert.notOk(this.$('.stacktrace').text().trim().match(/404/), "should not show the error status");
});
