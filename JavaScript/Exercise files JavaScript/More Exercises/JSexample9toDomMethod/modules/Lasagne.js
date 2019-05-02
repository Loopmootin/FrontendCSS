import Common from './Common.js';
class Lasagne{ 

  constructor() { 
    this.iLoveLasagneElement = document.querySelector(".iLoveLasagne");
    this.iLoveLasagne();
  }
  
  iLoveLasagne() { 
    this.iLoveLasagneElement.addEventListener("click", () => {
     
    //I have created a class Common that holds the method toDom
    let noteId = "123";
    let love = "Love is everything";

    let listElement = Common.toDom(`
    <div class="note-list-element" id="${noteId}element">
    ${love}
    </div>
  `);
    this.iLoveLasagneElement.appendChild(listElement);
    });
  }

  }
  export default Lasagne;