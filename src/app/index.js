'use strict';

import angular from 'angular';
import 'angular-resource';
import './search/search.module';

require('!style!css!sass!../sass/main.scss');

angular.module('gh', ['ngResource', 'gh.search']);

angular.bootstrap(document, ['gh']);
