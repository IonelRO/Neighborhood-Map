const api = 'https://api.foursquare.com';
const cli_id = 'VRJROPCAFPLE2AGGH02TVCWP5TYRO4UMQKCYSROZGYZER20V';
const cli_secret = 'C5CQZGWYOVGO0SNA5IXYJVLMA44AMBX4BFSLVAQQLDUMLOGA';
const limit = '10';
const location = 'Cluj-Napoca';

const headers = {
    'Accept': 'application/json'
  }

export const get = () =>
    fetch(`${api}/v2/venues/explore?near=${location}&client_id=${cli_id}&client_secret=${cli_secret}&v=20180720&query=top%20picks&limit=${limit}`, { headers })
    .then(r => r.json())
    .then(data => data.response.groups[0].items)
