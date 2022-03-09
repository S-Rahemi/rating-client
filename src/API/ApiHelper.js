
const call = async (method, cb, object) => {
const requestOptions = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object)
};
fetch('/api/rate', requestOptions)
  .then(
    function(response) {
      if (![200,304].includes(response.status)) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {        
        //console.log(data);
        cb(data); 
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
export default call;