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


 // Create an Object
const persons = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // show in a loop 

  let view = "";

  for (let x in persons)
    {
        view+=persons[x]+ " ";
    }


const test = {
    name : "ok",
    age: 34,
    rool : 2323
};

console.log(test);
  // Display Properties
  document.getElementById("demo").innerHTML = view;

  // Conver js object to json 

  let stringJson = JSON.stringify(persons);
  document.getElementById('test').innerHTML=stringJson;

  // object constructore 

  function PersonCons(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eye=eye;
  }

  const myfather=new PersonCons("jon","doer",34,"blue");
  const mymother = new PersonCons("sa","fal",30  )
  document.getElementById("test2").innerHTML=myfather;
// string 
  let s = "hey this is not fun";
  let s2 = s.slice(0,2);
  let s3=s.substring(0,4);
  console.log(s2);
  console.log(s3);

  let text = `the quick brown fox jumps over the lazy dog`;
  console.log(text);
  let s5= "to dhisf";
  let s6= "THER ARE NO NO";
  console.log(s5.toUpperCase());
  console.log(s6.toLowerCase());

  let s7 ="   white space remove using   trim ";

  console.log(s7.trim());

  let tex = "please visit me";
let rep = tex.replace("me","you");
console.log(rep);
console.log(s7.search("using"));
console.log(s7.match("trim"));


//example string 
let str = "this is test for some operation "

console.log(str.matchAll("is")); //The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
