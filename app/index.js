import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import angular from 'angular';


import uirouter from 'angular-ui-router';
import routing from './config';

import home from './features/home';
import list from './features/list';

angular.module('app', [
          uirouter, 
          home,
          list
        ])
        .config(routing);