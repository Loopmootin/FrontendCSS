import Data from './data.js';

class Bitcoin{ 

  constructor() { 
    this.bitcoinElementPrice = document.querySelector(".card-content-price .content");
    this.bitcoinElementAvg = document.querySelector(".card-content-avg .content");
    this.bitcoinElementPct = document.querySelector(".card-content-pct .content");

    this.listBitcoinDataPrice();
    this.listBitcoinDataAvg();
    this.listBitcoinDataPct();
  }

  async listBitcoinDataPrice() {
    let bitCoinData = await Data.getBitcoinData();

    for (let pri of Object.keys(bitCoinData.open)) {

      let data = bitCoinData.open[pri];
      let listElement = document.createElement('p');

      listElement.innerHTML = `${pri} : ${data}$`;

      this.bitcoinElementPrice.appendChild(listElement);
    }
  }

  async listBitcoinDataAvg() {
    let bitCoinData = await Data.getBitcoinData();

    for (let avg of Object.keys(bitCoinData.changes.price)) {

      let data = bitCoinData.changes.price[avg];
      let listElement = document.createElement('p');

      listElement.innerHTML = `${avg} : ${data}$`;

      this.bitcoinElementAvg.appendChild(listElement);
    }
  }

  
  async listBitcoinDataPct() {
    let bitCoinData = await Data.getBitcoinData();

    for (let pct of Object.keys(bitCoinData.changes.percent)) {

      let data = bitCoinData.changes.percent[pct];
      let listElement = document.createElement('p');

      listElement.innerHTML = `${pct} : ${data}%`;

      this.bitcoinElementPct.appendChild(listElement);
    }
  }
}

export default Bitcoin;