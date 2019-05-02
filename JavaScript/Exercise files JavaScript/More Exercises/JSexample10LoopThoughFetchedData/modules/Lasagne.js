import Data from './data.js';

class Lasagne{ 

  constructor() { 
    this.listBitcoinData();
  }

  async listBitcoinData() {
   
   
/* 

Object.keys(your_object) is a method, that transform your object into a loop-able array
source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

*/

   let bitCoinData = await Data.getBitcoinData();

   for(let currency of Object.keys(bitCoinData.rates)){

    let data = bitCoinData.rates[currency];
    console.log(currency);
    console.log(data);
    
    }

    
   }
  }
  export default Lasagne;

 
