import Data from './data.js';
import Common from './Common.js';

class Bitcoin{ 

  constructor() { 

    this.listBitcoinDataAvg();
    this.bitcoinElement = document.querySelector(".bitcoin-element");

    this.listBitcoinDataPct();
    this.bitcoinElement = document.querySelector(".bitcoin-element");

    this.listBitcoinDataPrice();
    this.bitcoinElement = document.querySelector(".bitcoin-element");
  }

  async listBitcoinDataAvg() {

    let bitCoinData = await Data.getBitcoinData();

    let listElement = Common.toDom(`<h2>Average Bitcoin prices</h2>`);
    this.bitcoinElement.appendChild(listElement);

    for (let avg of Object.keys(bitCoinData.open)) {

      let data = bitCoinData.open[avg];

      let listElement = Common.toDom(`<p>${avg} : ${data}$</p>`);
      this.bitcoinElement.appendChild(listElement);
    }
  }

  async listBitcoinDataPct() {

    let bitCoinData = await Data.getBitcoinData();

    let listElement = Common.toDom(`<h2>Changes in Bitcoin prices in pct</h2>`);
    this.bitcoinElement.appendChild(listElement);

    for (let pct of Object.keys(bitCoinData.changes.percent)) {

      let data = bitCoinData.changes.percent[pct];

      let listElement = Common.toDom(`<p>${pct} : ${data}%</p>`);
      this.bitcoinElement.appendChild(listElement);
    }  
  }

  async listBitcoinDataPrice() { 

    let bitCoinData = await Data.getBitcoinData();

    let listElement = Common.toDom(`<h2>Changes in Bitcoin prices in dollar</h2>`);
    this.bitcoinElement.appendChild(listElement);

    for (let pri of Object.keys(bitCoinData.changes.price)) {

      let data = bitCoinData.changes.price[pri];

      let listElement = Common.toDom(`<p>${pri} : ${data}$</p>`);
      this.bitcoinElement.appendChild(listElement);
    }
  }
}
  export default Bitcoin;