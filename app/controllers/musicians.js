import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sing() {
      alert('I am singing from controller');
    },

    dance() {
      alert('I am dancing from controller');
      // return true indicates that similar action in router could be called
      return true;
    },

    enter() {
      this.transitionToRoute('melodies');
    },
  },
});
