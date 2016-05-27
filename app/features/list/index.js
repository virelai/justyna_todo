import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularFire from 'angularfire';

import addItem from './directives/add_item';
import loginPanel from './directives/login_panel';

import routing from './list.routes';
import ListController from './list.controller';

export default angular.module('app.list', [uirouter, angularFire])
  .config(routing)
  .controller('ListController', ListController)
  .directive('addItem', addItem)
  .directive('loginPanel', loginPanel)
  .name;