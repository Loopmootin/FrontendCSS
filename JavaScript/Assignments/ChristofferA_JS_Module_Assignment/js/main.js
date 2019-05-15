import BitcoinPrice from './modules/bitcoinPrice.js';
import BitcoinChangesPercent from './modules/bitcoinChangePercent.js';
import BitcoinChangesPrice from './modules/bitcoinChangePrice.js';
import UpdateValues from './modules/updateValues.js';
import UpdateChangePriceValues from './modules/updateChangePriceValues.js';
import UpdateChangePercentValues from './modules/updateChangePercentValues.js';

let percentClicked = false;
let beenFired = false;

function loadOnce() {
    let bitcoinChangesPercent = new BitcoinChangesPercent();
    beenFired = true;
}

if (document.URL.indexOf("index.html") >= 0) {
    let bitcoinPrice = new BitcoinPrice();
    
} else if (document.URL.indexOf("price-changes.html") >= 0) {
    let bitcoinChangesPrice = new BitcoinChangesPrice();
    document.querySelector(".btn-percent").addEventListener("click", function () {

        document.querySelector(".btn-price").style.backgroundColor = "#d6d6d6";
        document.querySelector(".btn-price").style.color = "#f17464";

        document.querySelector(".btn-percent").style.backgroundColor = "#f17464";
        document.querySelector(".btn-percent").style.color = "#d6d6d6";
        
        if (!beenFired) {
            loadOnce();
            console.log("Fire at will");
        }
        percentClicked = true;
    });
}

setInterval(() => {
    if (document.URL.indexOf("index.html") >= 0) {
        
        let updateValues = new UpdateValues();

    } else if (document.URL.indexOf("price-changes.html") >= 0) {

        document.querySelector(".btn-percent").addEventListener("click", function () {
            percentClicked = true;
        });
        document.querySelector(".btn-price").addEventListener("click", function () {
            percentClicked = false;
        });

        if (percentClicked == true) {
            //console.log("Percent button is active!");
            let updateChangePercentValues = new UpdateChangePercentValues();
        } else if(percentClicked == false) {
            //console.log("Price button is active!");
            let updateChangePriceValues = new UpdateChangePriceValues();
        }
    }
}, 2000);
