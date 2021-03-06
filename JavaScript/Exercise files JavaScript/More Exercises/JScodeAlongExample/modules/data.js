class Data{ 
    
      static getBitcoinData() { 
    
          return fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
          .then(
            (response) => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              //if it works, this piece of code is returned 
              return response.json();      
            }
            
          )
          .catch((err) => {
            console.log('Fetch Error :(', err);
          });
      }
      
    }
    
    export default Data;

 