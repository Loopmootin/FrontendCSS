import Data from './data.js';
import Common from './Common.js';

class Lasagne{ 

  constructor() { 
    this.listBitcoinData();
    this.iLoveLasagneElement = document.querySelector(".iLoveLasagne");
  }

  async listBitcoinData() {
    let bitCoinData = await Data.getBitcoinData();
    console.log(bitCoinData.averages);

    

    for (let avg of Object.keys(bitCoinData.averages)) {

      let data = bitCoinData.averages[avg];
     
      let listElement = Common.toDom(`<p>${avg}ly - $${data}</p>`);
      this.iLoveLasagneElement.appendChild(listElement);

    }
  }

}
  export default Lasagne;