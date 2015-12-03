import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('person-list', 'Integration | Component | person list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(4);

  let model = {
    people: [
      {login: "chrisccerami", avatar_url: "github.com/chrisccerami"},
      {login: "judngu", avatar_url: "github.com/judngu"}
    ],
    favoritePerson: "chrisccerami"
  };
  this.set('model', model);
  this.set('actions', {
    setAsFavorite(person) {
      assert.equal(person.login, 'judngu');
    }
  });

  this.render(hbs`
    {{#person-list
      people=model.people
      favoritePerson=model.favoritePerson
      onFavorite=(action 'setAsFavorite')
      as |person|}}
      <img src={{person.avatar_url}} height=100>{{person.login}}
    {{else}}
      No one's here
    {{/person-list}}
  `);

  assert.ok(this.$().text().trim().match(/chrisccerami/));
  assert.ok(this.$().text().trim().match(/judngu/));
  assert.ok(this.$('img')[0].src.match(/github.com\/chrisccerami/));

  this.$('.person:nth-of-type(2)').click();
});
