import Ember from 'ember';

export function eq([first, second]) {
  return first === second;
}

export default Ember.Helper.helper(eq);
