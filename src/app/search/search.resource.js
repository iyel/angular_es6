/**
 * Created by Ilya on 04/11/15.
 */

'use strict';

class SearchModel {
    constructor($resource) {
        var apiUrl = 'https://api.github.com' + '/search';

        return $resource(apiUrl, null, {
            'getRepos': {
                method: 'GET',
                url: `${apiUrl}/repositories`,
                params: {q: '@q'}
            }
        })
    }

    static factory($resource) {
        return new SearchModel($resource);
    }
}

SearchModel.factory.$inject = ['$resource'];

angular.module('gh.api.search', [])
    .factory('Search', SearchModel.factory);