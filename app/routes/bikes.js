import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.run.later((function(){
        resolve(['bike1', 'bikeDSA']);
      }), 3000);
    });
  },
});
