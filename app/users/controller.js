import Ember from 'ember';
import Pagination from '../mixins/pagination';

const {
  computed
} = Ember;

export default Ember.Controller.extend(Pagination, {
  queryParams: ['page'],
  totalRecords: computed.readOnly('model.repoInfo.stargazers_count'),

  actions: {
    setAsFavorite(person) {
      this.set('model.favoritePerson', person);
      this.transitionToRoute('users.user', person.login);
    }
  }
});
