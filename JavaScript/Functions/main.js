

function smile1() {
    return "smile1";
}

console.log(smile1())



document.getElementById("smile2").innerHTML = (function smile2() {
    return "smile2";
}());



let smile3 = function() {
    return "smile3";
};

console.log(smile3);



document.getElementById("smile4").addEventListener("click", function() {
    alert("smile4");
});

