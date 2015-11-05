/**
 * Created by Ilya on 04/11/15.
 */

//var _Search = new WeakMap();

class SearchController {
    constructor(Search) {
        this.query = '';
        this.repos = [];
        this.Search = Search;
    }

    searchRepos() {
        if (this.query) {
            this.Search.getRepositories({q: this.query}, (data) => {
                this.repos = data.items;
            });
        }
    }
}
SearchController.$inject = ['Search'];

export default SearchController;