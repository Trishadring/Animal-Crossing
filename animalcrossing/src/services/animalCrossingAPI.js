const baseUrl = 'https://parseapi.back4app.com/classes/FishData';
const memberUrl = id => `${baseUrl}/${id}`;
const authHeaders = {
  'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
  'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
};
const reformatResponseData = response => {
  const reformatMonster = (monster) => {
    const {objectId, name, home, creepiness, bio} = monster;
    return {id: objectId, name, home, creepiness, bio};
  }
  let data = response.data;
  if (data.results && Array.isArray(data.results))
    data = data.results.map(m => reformatMonster(m));
  else
    data = reformatMonster(data);
  return {data};
}
const handleAPIErrors = response => {
  if (!response.ok) {
    return response.json().then(data => {
      console.log("ERROR!", data);
      let errors = data.error;
      return {errors};
    });
  }
  else 
    return response.json().then(data => ({data}) );
}
const index = () => {
  return fetch(baseUrl, { headers: authHeaders })
         .then(handleAPIErrors)
         .then(reformatResponseData);
}
const show = id => {
  return fetch(memberUrl(id), { headers: authHeaders } )
         .then(handleAPIErrors)
         .then(reformatResponseData);
}



const animalCrossingAPI = {
  index,
  show,
  destroy,
  create,
  update
};
export default animalCrossingAPI;