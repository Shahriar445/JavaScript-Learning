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
let x =100/"apple"

console.log(x);
let mynumber =2;
while (mynumber != Infinity){
    mynumber =mynumber * mynumber;
}

let xy= "34";
let y = Number(xy)+2;
console.log(y);

//array 

let arr = ["amo", "mamo","khalo"];
console.log(typeof arr);  
let str2=arr.toString(); // converting array to string 
console.log(str2);
let t="";
for (let i =0 ;i<arr.length;i++){
    t+=arr[i]+" ";
}


console.log(t);


const number= [23,2323,2323,232,34];

const over19 = number.filter(myfunction);
function myfunction (value)
{
    return value > 500;
}
console.log(over19);

const d = new Date();
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());

// switch 

switch (new Date().getDay()){
    case 0:
        day ="Sunday";
        break;
    case 1:
            day ="Monday";
            break;
    case 2:
        day ="tuesday";
        break;
    case 3:
        day ="Wednessday";
        break;
    case 4:
        day ="Thursday";
    case 5:
        day ="Friday";
        break;
    case 6:
        day ="Saturday";
        break;
}
console.log(day);

// api

const xyz =document.getElementById("location");
function getlocation()
{
    if (navigator.geolocation){
        navigator.geolocation.watchPosition(showPosition);
    }else{
        xyz.innerHTML="geo location is no supported by this browser";

    }



}
function showPosition(position)
{
    xyz.innerHTML="Latitude: "+position.coords.latitude+
    "<br>Longitude : "+ position.coords.longitude;

}
const person5 = {
    Name: "shipon",
    age : 23,
    rool : 2232323
};

document.getElementById("t2").innerHTML=Object.getOwnPropertyNames(person5);

const person6= {
    firstName:"Johan",
    lastName:"doe",
    age:34,
    language:"bd",
    get lang(){
        return this.language.toUpperCase();
    }

};

// document.getElementById("demo4").innerHTML=person6.lang;
console.log(Object.isFrozen(person6));


// function 
const x2= function (a,b ){
    return a*b;
}
let z = x2(4,2);
console.log(z);


// default parameters 
function myfuncation (x,y)
{
    if (y===undefined)
        {
            y=2;
            return x*y;   
     }
}
document.getElementById("demo4").innerHTML=myfuncation(4);
//default parameter value 
function myfuncation2(x,y=12)
{
    return  x*y;
}
let xy2=myfuncation2(2);
console.log(xy2);

// funcatin rest parameter 

function sum(...args){
    let sum =0 ;
    for (let i of args){
        sum+=i;
    
    }
    return sum;
}
let x34= sum(2,3,4,5,6);// as you want pass parameter 
console.log(x34)


// function call methods 

const prsn={
    fullName:function(){   
        return this.firstName +" "+this.lastName;
    }
}

const prsn1= {
    firstName:"johan",
    lastName:"doe"
}
const prsn2= {
    firstName:"test",
    lastName:"doe"
}

let ok = prsn.fullName.call(prsn1);
let ok2 = prsn.fullName.call(prsn2);
console.log(ok);
console.log(ok2);

// call method accept argument 
const prsn0 ={
    fullName:function(city,county){
        return this.firstName +" "+city +"  country:  "+ county;
    }
}
const prsn4= {
    firstName:"johan d",
    lastName:"doe"
}
const ok3 =prsn0.fullName.call(prsn4,"chadput","e ");
console.log(ok3);

// class in js 
class Car {
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    age(){
        const date = new Date();
        return date.getFullYear()-this.year;
    }
}

const mycar = new Car("ford",2014);
document.getElementById("demo8").innerHTML=
"my car is "+mycar.age()+ " year old.";









