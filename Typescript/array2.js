var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr = ["sonu", "monu", "resma", "sonalika"];
var prr = new Array("india", "russia", "israil", "france");
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
for (var i = 0; i < prr.length; i++)
{
    console.log(prr[i]);
}
var copy = __spreadArrays(prr, [7, 8, 9]);
console.log(copy);
