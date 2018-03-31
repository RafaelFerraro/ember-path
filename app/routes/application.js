import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return [
      {id: 1, title: 'title1', subject: 'subject1', body: 'body1'},
      {id: 2, title: 'title2', subject: 'subject2', body: 'body2'},
      {id: 3, title: 'title3', subject: 'subject3', body: 'body3'},
    ]
  },
});
