import Ember from 'ember';

export function makeLoud([string], hash) {
  if (hash.format === 'bold') {
          return new Ember.Handlebars.SafeString(`<strong>${string}</strong>`);
        } else {
          return string.toUpperCase();
        }
}

export default Ember.Helper.helper(makeLoud);
