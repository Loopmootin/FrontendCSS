import Data from './data.js';

class Lasagne{ 

  constructor() { 
    this.listBitcoinData();
  }

  async listBitcoinData() {
   let bitCoinData = await Data.getBitcoinData();
   console.log(bitCoinData);
  }

  }
  export default Lasagne;