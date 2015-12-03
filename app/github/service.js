import Ember from 'ember';

const {
  service
} = Ember.inject;

const clientId = 'e1390b0a729c5c4ce2c5';
const clientSecret = '3402245cff2a7ab233d4bc3112fb34aa019081a8';

export default Ember.Service.extend({
  ajax: service(),
  baseUrl: "https://api.github.com/",

  request(repo, params) {
    let baseUrl = this.get('baseUrl');
    let fullUrl = `${baseUrl}${repo}?client_id=${clientId}&client_secret=${clientSecret}`;

    return this.get('ajax').request(fullUrl, {
      data: params
    });
  }
});
