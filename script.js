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
  document.getElementById("test2").innerHTML=myf;