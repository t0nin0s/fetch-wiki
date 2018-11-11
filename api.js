const fetch = require('node-fetch');
const WIKI_URL = 'https://en.wikipedia.org/w/api.php'

function fetchPage(){
    return fetch(`${WIKI_URL}?action=parse&page=List_of_metropolitan_areas_in_Asia&section=1&format=json`, {
        method: 'GET',
      },
    )
    .catch((response) => {
        throw new Error(`Error ${response}`);
    });
};

module.exports = {
    fetchPage
}