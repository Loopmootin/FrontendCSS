class Lasagne{ 

  constructor() { 
    this.iLoveLasagneElement = document.querySelector(".iLoveLasagne");
    this.iLoveLasagne();
  }
  
  iLoveLasagne() { 
    this.iLoveLasagneElement.addEventListener("click", () => {
    this.iLoveLasagneElement.innerHTML = "My favorite dish is lasagne now, before it was spagetti!";
    this.iLoveLasagneElement.classList.add("blue");
    });
  }

  }
  export default Lasagne;