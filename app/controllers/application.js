import Controller from '@ember/controller';

export default Controller.extend({
  welcomeText: 'Welcome Text',
  onChangeText: 'On Change Text',
  isChecked: true,

  actions: {
    pressed() {
      alert('Input was pressed');
    },
  }
});
