import Data from './data.js';

class UpdateValue {

    constructor() {
        this.updatePriceValue();
        //this.elementId = document.querySelectorAll("#" + pri).id;
    }


    async updatePriceValue() {

        //removeElements.forEach(element => element.parentNode.removeChild(element));

        let bitCoinData = await Data.getBitcoinData();

        let idArray = [];

        for (let i = 0; i < 5; i++) {

            let pri = Object.keys(bitCoinData)[i];
            let data = bitCoinData[pri];

            //console.log(elementId);

            if (elementId == pri) {
                console.log("We are the same!");
                idArray.push(elementId);
            } else {
                console.log("We're not the same!");
            }
        }
        console.log(idArray);
        
    }
}
export default UpdateValue;