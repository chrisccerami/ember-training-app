import { moduleFor, test } from 'ember-qunit';
import { clientSecret, clientId } from '../../../github/service';

moduleFor('service:github', 'Unit | Service | github', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it makes a request with the proper url', function(assert) {
  assert.expect(1);
  let repoUrl = 'emberjs/ember.js';
  let service = this.subject();
  let baseUrl = service.get('baseUrl');
  let expectedUrl = `${baseUrl}${repoUrl}?client_id=${clientId}&client_secret=${clientSecret}`;

  // let service = this.subject({
  //   ajax: {
  //     request(url) {
  //       // we can't really use this format in this case because we don't have access to expected url yet
  //     }
  //   };
  // });

  let ajax = {
    request(url) {
      assert.equal(expectedUrl, url, "should combine baseUrl, repoUrl, and client ID and secret");
    }
  };
  service.set('ajax', ajax);
  service.request(repoUrl);
});
