function identity<T>(arg: T): T {    
    return arg;    
}    
let output1 = identity<string>("myString");    
let output2 = identity<number>( 100 );
let output3 = identity<number>( 50 );   
console.log(output1);  
console.log(output2);
console.log(output3);  