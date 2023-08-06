// use the basic from of object 

var shopingCart={
    books:3,
    chosma:5,
    goru:8,
    sagol:9

}
// when you know the property value to know use dot notation
var shopCount = shopingCart.chosma


// alternative way to find the property value
var shopCount2 = shopingCart['books']



// if you want to know all property  name from this use this type of things
var poparty =Object.keys(shopingCart);

// if you want to know about all the value from this use this build in function 
var popertyvalue =Object.values(shopingCart);


// property
console.log(poparty);

// values
console.log(popertyvalue);