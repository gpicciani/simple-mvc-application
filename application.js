var SearchModel = function SearchModel(XMLHttpRequest) {
  this.XMLHttpRequest = XMLHttpRequest;
};

SearchModel.prototype.getRepositories = function getRepositories(searchCriteria, fn){

  console.log('fetch repositories ' + searchCriteria);

  fetch('https://api.github.com/search/repositories?q='+ searchCriteria).then(response => {
    response.json().then(json => {
      fn(json);
    });
  });
};

var SearchView = function SearchView(element) {
  this.element = element;

  this.getRepositories = null;
};

SearchView.prototype.render = function render(viewModel) {
  console.log('view search resutls ' + viewModel.total_count);
};

var SearchController = function SearchController(searchView, searchModel) {
  this.searchView = searchView;
  this.searchModel = searchModel;
};

SearchController.prototype.initialize = function initialize() {
  this.searchView.getRepositories = this.getRepositories.bind(this);
};

SearchController.prototype.getRepositories = function getRepositories() {
  //var target = e.currentTarget;
  var searchCriteria = document.getElementById('myInput').value;

  this.searchModel.getRepositories(searchCriteria, searchView.render.bind(this));
};

SearchController.prototype.showSearchResults = function showSearchResults(jsonSearchResults) {

 this.searchView.render(jsonSearchResults);
};

var searchModel = new SearchModel(XMLHttpRequest);

var targetElement = document.getElementById('listOfRespositories');
var searchView = new SearchView(targetElement);

var searchController = new SearchController(searchView, searchModel);

searchController.initialize();
//searchController.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });
