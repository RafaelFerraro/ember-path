import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    sing() {
      alert('I am singing from router');
    },

    dance() {
      alert('I am dancing from router');
    },
  },
});
