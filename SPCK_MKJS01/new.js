const options = {
    method: 'GET',
    url: 'https://coinpaprika1.p.rapidapi.com/exchanges',
    headers: {
      'x-rapidapi-host': 'coinpaprika1.p.rapidapi.com',
      'x-rapidapi-key': '85ddb24a5cmsh18392d6a5801ac6p13e892jsn72643991ed3d'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
  


  let global_render = "";
let vietnam_render = "";











function mixData(data) {
  let result = [];
  for (let i = 0; i < 5; i++) {
    let randomIndex = getRandomInt(0, data.length);
    result.push(data[randomIndex]);
  }

  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}



