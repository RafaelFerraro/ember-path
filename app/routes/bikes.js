import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  model() {
    return new Promise(function(resolve) {
      later((function(){
        resolve(['bike1', 'bikeDSA']);
      }), 3000);
    });
  },
});
