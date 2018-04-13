import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('helloworldapp');
  this.route('conditional');
  this.route('students');
  this.route('posts', { path: 'posts/:id' });
  this.route('numbers');
  this.route('books', {path: 'books/:id'});
  this.route('about', { path: '/aboutme' }, function() {
    this.route('location');
    this.route('job');
  });
});

export default Router;
