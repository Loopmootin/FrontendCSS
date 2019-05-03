import Data from './data.js';
import Common from './Common.js';

class Lasagne{ 

  constructor() { 
    this.iLoveLasagneElement = document.querySelector(".iLoveLasagne");
    this.listBitcoinData();
  }

  async listBitcoinData() {
    let bitCoinData = await Data.getBitcoinData();
    let data = bitCoinData.averages[currency];

    this.iLoveLasagneElement.addEventListener("click", () => {

      let listElement = Common.toDom(`<p>Hi mum! ${data}</p>`);
      this.iLoveLasagneElement.appendChild(listElement);

    });

    //I have created a class Common that holds the method toDom
  }

}
  export default Lasagne;