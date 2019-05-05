import Data from './data.js';
import Common from './Common.js';

class Lasagne{ 

  constructor() { 
    this.listBitcoinData();
    this.iLoveLasagneElement = document.querySelector(".iLoveLasagne");
  }

  async listBitcoinData() {
    let bitCoinData = await Data.getBitcoinData();
    console.log(bitCoinData.changes);

    for (let cng of Object.keys(bitCoinData.changes)) {
      let listElement = Common.toDom(`<p>${cng}</p>`);
      this.iLoveLasagneElement.appendChild(listElement);


    }

    

    for (let pct of Object.keys(bitCoinData.changes.percent)) {

      let data = bitCoinData.changes.percent[pct];

      let listElement = Common.toDom(`<p>${pct} - ${data}</p>`);
      this.iLoveLasagneElement.appendChild(listElement);
    }


    for (let pri of Object.keys(bitCoinData.changes.price)) {

      let data = bitCoinData.changes.price[pri];

      let listElement = Common.toDom(`<p>${pri} - ${data}</p>`);
      this.iLoveLasagneElement.appendChild(listElement);
    }
  }
}
  export default Lasagne;