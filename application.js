//CONFIGURATION
var config = {
  SEARCH_API_REPOS:"https://api.github.com/search/repositories?q=",
  PAGINATION_PARAMETERS:"&page1&per_page=10"
}


//MODEL
var SearchModel = function SearchModel() {};

SearchModel.prototype.getRepositories = function getRepositories(searchCriteria, fn){
  
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


SearchView.prototype.render = function render(jsonResponse) {
  //clear from previous results
  searchView.element.innerHTML = ``;
  //update the DOM with the first 10 results
  jsonResponse.items.map(function(item) {
      let li = document.createElement('li'),
          img = document.createElement('img'),
          h3 = document.createElement('h3'),
          p = document.createElement('span');
      img.src = item.owner.avatar_url;
      h3.innerHTML = `${item.full_name}`;
      p.innerHTML = `${item.description}`;
      li.appendChild(img);
      li.appendChild(h3);
      li.appendChild(p);
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
