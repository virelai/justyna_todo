import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import LoginStoreService from './loginstore.service';

export default angular.module('app.home', [uirouter,'app.list'])
  .config(routing)
  .controller('HomeController', HomeController)
    .service('LoginStoreService', LoginStoreService)
  .name;