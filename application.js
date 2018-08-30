//CONFIGURATION
var config = {
  SEARCH_API_REPOS:"https://api.github.com/search/repositories?q=",
  PAGINATION_PARAMETERS:"&page1&per_page=10"
}


//MODEL
var SearchModel = function SearchModel() {};

SearchModel.prototype.getRepositories = function getRepositories(searchCriteria, fn){
  console.log('fetch repositories ' + searchCriteria);
  fetch(config.SEARCH_API_REPOS + searchCriteria + config.PAGINATION_PARAMETERS).then(response => {
    response.json().then(json => {
      fn(json);
    });
  });
};


//VIEW
var SearchView = function SearchView(element) {
  this.element = element;
};

SearchView.prototype.createNode = function createNode(element) {
      return document.createElement(element);
  }

SearchView.prototype.append = function append(parent, el) {
    return parent.appendChild(el);
  }

SearchView.prototype.render = function render(jsonResponse) {
  console.log('view search resutls ' + jsonResponse.total_count);
  searchView.element.innerHTML = ``;
  jsonResponse.items.map(function(item) {
      let li = document.createElement('li'),
          h3 = document.createElement('h3')
          span = document.createElement('span');
      h3.innerHTML = `${item.full_name}`;
      span.innerHTML = `${item.description}`;
      li.appendChild(h3);
      li.appendChild(span);
      searchView.element.appendChild(li);
    })
};


//CONTROLLER
var SearchController = function SearchController(searchView, searchModel) {
  this.searchView = searchView;
  this.searchModel = searchModel;
};


SearchController.prototype.getRepositories = function getRepositories() {
  //var target = e.currentTarget;
  var searchCriteria = document.getElementById('myInput').value;
  this.searchModel.getRepositories(searchCriteria, searchView.render.bind(this));
};


//INITIALIZATION
var searchModel = new SearchModel();
var targetElement = document.getElementById('repoList');
var searchView = new SearchView(targetElement);
var searchController = new SearchController(searchView, searchModel);

module.exports = SearchModel;
