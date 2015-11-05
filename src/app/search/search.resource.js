/**
 * Created by Ilya on 04/11/15.
 */

'use strict';

var _$resource = new WeakMap();

class SearchModel {
    constructor($resource) {
        _$resource.set(this, $resource);
        var apiUrl = 'https://api.github.com' + '/search';

        return _$resource.get(this)(apiUrl, null, {
            'getRepositories': {
                method: 'GET',
                url: apiUrl + '/repositories',
                params: {q: '@q'}
            }
        })//`${apiUrl}/repo`
    }

    static factory($resource) {
        return new SearchModel($resource);
    }
}

SearchModel.factory.$inject = ['$resource'];

angular.module('gh.api.search', [])
    .factory('Search', SearchModel.factory);