'use strict';

import {expect} from 'chai';
import SearchController from './search.controller';

describe('Testing SearchController', () => {
    var sut;
    var SearchResourceMock = {
        getRepositories: (query, success, error) => {
            var data = {
                total_count: 303,
                incomplete_results: false,
                items: [{}, {}, {}]
            };
            success(data);
        }
    };

    beforeEach(() => {
        sut =  new SearchController(SearchResourceMock);

    });

    it('should search with appopriate query', () => {
        sut.query = 'tetris';
        sut.searchRepos();
        expect(sut.repos.length).to.be.equal(3);
    })
});