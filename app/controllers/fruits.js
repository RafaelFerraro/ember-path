import Controller from '@ember/controller';

export default Controller.extend({
  property2: 'property2 value',
  property3: true,

  actions: {
    enter() {
      console.log("Property1: ", this.get('property1'));
      console.log("Property2: ", this.get('property2'));
      console.log("Property3: ", this.get('property3'));
      this.toggleProperty('property3');
      console.log("After toggling");
      console.log("Property3: ", this.get('property3'));
    },

    toggleProperty3() {
      this.toggleProperty('property3');
    },
  },
});
