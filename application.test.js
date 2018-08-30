const fetch = require('jest-fetch-mock');

jest.setMock('node-fetch', fetch);
const SearchModel = require('./application');

function returnNumberOfKeys(jsonArray){
  return(jsonArray);
}

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('search for node repositories', async () => {
    function callback(data) {
      expect(data.secret_data).toBe('12345');
      done();
    }
    fetch.mockResponse(JSON.stringify({ secret_data: '12345' }))
    var searchModel = new SearchModel();
    await searchModel.getRepositories('node', callback)
  });
})
