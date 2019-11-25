function a() {
    var x = 50;
    return function b() {
        var y = x + 5;
        console.log(y);
    };
}
var b = a();
b(); //returns '55'  
