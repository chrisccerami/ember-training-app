import Ember from 'ember';

const {
  service
} = Ember.inject;

const clientId = '659c99189de8471ddbec';
const clientSecret = '01e103c6c5d3686fdd9e680f289150c0ab513561';

export default Ember.Service.extend({
  ajax: service(),
  baseUrl: "https://api.github.com/",

  request(repo) {
    let baseUrl = this.get('baseUrl');
    return this.get('ajax').request(`${baseUrl}${repo}?client_id=${clientId}&client_secret=${clientSecret}`);
  }
});
