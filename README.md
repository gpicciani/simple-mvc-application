# Simple MVC application

A simple javascript application that gives the user a way to search Github repositories, using the Github search API.

The project implements the [MVC design pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) to make a clean cut separation of concerns. The idea is to make the solution intelligible and inviting.

![Search Repositories](https://docs.google.com/drawings/d/e/2PACX-1vStotMJROO6Mt71hZOdLKBmQ21xcgeVwn1Ud_vIcZ40sEG5EjShA_MyetIytp0YHiDELA-XuGb3uFPt/pub?w=480&h=360)

## Getting started

### Prerequisites
* [Git](https://git.com/)
* [Node.js](https://nodejs.org/)
* NPM 5 and above
* Express JS

### Clone and install
* `git clone` this repo.
* `npm install express`
* `npm install` in the root of the folder created.


### Test
`npm test` in the project root will run an interactive test framework in watch mode.

### Github Search API
 - [search repositories](https://developer.github.com/v3/search/#search-repositories)
 - [pagination](https://developer.github.com/v3/#pagination)

 ### Run
 `node index.js` in the project root will run express webserver.
