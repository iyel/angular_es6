/**
 * Created by Ilya on 04/11/15.
 */

'use strict';

import SearchDirective from './search.directive';
import SearchController from './search.controller';
import './search.resource';

angular.module('gh.search', ['gh.api.search'])
    .controller('SearchController', SearchController)
    .directive('ghSearch', SearchDirective.directiveFactory);