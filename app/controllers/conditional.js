import Controller from '@ember/controller';

export default Controller.extend({
  isFinished: true,
  hasMoreSteps: true,

  isFinishedButHasMoreSteps: "The work was finished but there's still a lot of work to do",
  isFinishedText: 'The work was finished',
  isNotFinishedText: "The work wasn't finished",
});
