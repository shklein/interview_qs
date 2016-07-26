function myFunction() {
    var a = 4;
    a = a * a;
    return a;
}

console.log(a);

var a = 4;

function myFunction() {
    a = a * a;
    return a;
}

console.log(a);

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

console.log('result:' + add());
