console.log("hello");

// document.write(4+4)
// window.alert('owo')

function AddTwoNumber(x,y)
{
    return x+y*(y);
}
let te = AddTwoNumber(2,3);
console.log(te);

const car = {type:"fiat", model:"400",color:"white"};

console.log(car.type);
const person ={
    firstName :"shipon",
    lastName:"haque",
    age : 34,
    eyecolor:"green",
    name:function(){
        return this.firstName+ " "+ this.lastName;
    }
};


// create an object 
const person2={};

// add property 
person.firstName="hey";


// create empty object 

const person3 = new Object();
person3.firstName="hey";


const person4 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  person4.name=function(){
    return (this.firstName +" "+ this.lastName).toUpperCase();
  };
  console.log(person4)
