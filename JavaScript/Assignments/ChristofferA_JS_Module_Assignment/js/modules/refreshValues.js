import Data from './data.js';

class UpdateValues {

    constructor() {

        this.updateValues();
        this.bitcoinElement = document.querySelector(".changes");

    }


    async updateValues() {

        let updateInner = document.querySelectorAll(".changes-item");
        let bitCoinData = await Data.getBitcoinData();

        console.log(Object.keys(updateInner));
        /*for(let pct of Object.keys(bitCoinData.changes.percent)) {

            //console.log("Updating Percent values!");
            let data = bitCoinData.changes.percent[pct];

            console.log(updateInner);
            console.log(data);

        }*/

        
        for (let element of Object.keys(updateInner)) {
            console.log("Hej");
            console.log(`${element}: ${updateInner[element]}`);
        }
    }

}

export default UpdateValues;