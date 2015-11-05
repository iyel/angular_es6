/**
 * Created by Ilya on 04/11/15.
 */

import tpl from './search.html';

class SearchDirective {
    constructor() {
        this.restrict = 'EA';
        this.scope = {};
        this.controller = 'SearchController';
        this.controllerAs = 'searchCtrl';
        this.bindToController = {};

        this.template = tpl;
    }

    static directiveFactory() {
        return new SearchDirective();
    }
}

export default SearchDirective.directiveFactory;