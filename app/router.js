import EmberRouter from '@ember/routing/router';
import config from 'book-explorer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('explorer');
  this.route('book', { path: '/book/:key_id' });
});
