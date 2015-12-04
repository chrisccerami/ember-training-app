import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// let something;

moduleForComponent('person-list', 'Integration | Component | person list', {
  integration: true,

  // examples:

  // beforeEach() {
  //   something = Ember.Object.create();
  // },
  //
  // afterEach() {
  //
  // }
});

test('it renders', function(assert) {
  assert.expect(5);

  let favoritePerson = {login: "chrisccerami", avatar_url: "github.com/chrisccerami"};

  let model = {
    people: [
      favoritePerson,
      {login: "judngu", avatar_url: "github.com/judngu"}
    ],
    favoritePerson: favoritePerson
  };
  this.set('model', model);
  this.set('actions', {
    setAsFavorite(person) {
      assert.equal(person.login, 'judngu');
      this.set('model.favoritePerson', person);
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
  let isFavorite = this.$('.person:nth-of-type(2)').hasClass('favorite');
  assert.ok(isFavorite, "click a person should favorite");
});

test('throws error if no favoritePerson', function(assert) {
  assert.throws(() => {
    this.render(hbs`
      {{#person-list}}
        no person given
      {{/person-list}}
    `);
  });
});
