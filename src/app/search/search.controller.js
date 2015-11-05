/**
 * Created by Ilya on 04/11/15.
 */

var SearchAPI = new WeakMap();

class SearchController {
    constructor(Search) {
        this.query = '';
        this.repos = [];
        SearchAPI.set(this, Search);
    }

    searchRepos() {
        if (this.query) {
            SearchAPI.get(this).getRepos({q: this.query}, (data) => {
                this.repos = data.items;
            });
        }
    }
}
SearchController.$inject = ['Search'];

export default SearchController;