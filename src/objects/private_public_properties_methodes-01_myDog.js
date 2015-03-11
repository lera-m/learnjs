/*************************************/
console.clear();

function Dog (name) {
    // --- private objects
    // private variables
    var paws = 4;
    var stroked = 0;
    // name is a private variable, too

    // privat funktion
    function bark () {
        console.log(name + ' says "woof-woof!"');
    }

    // --- public (privileged) properties
    this.name = name;
    // public methods
    this.tickle = function () {
        console.log(this.name + ' has ' + paws + ' ticklish paws.');
        bark();
    };
    this.pet = function () {
        stroked++;
        console.log(name + ' was stroked ' + stroked + ' time.');
        bark();
    };
}

var myDog = new Dog('Hermann');
myDog.tickle();
myDog.pet ();
try {
  myDog.bark();
} catch (err) {
  console.log(err);
}



console.log('myDog.name: ' + myDog.name);
myDog.name = "Ricky Martin Star";
console.log('myDog.name: ' + myDog.name);


// paws cannot be accessed from outside:
console.log('myDog.paws: ' + myDog.paws);
// strokes cannot be accessed from outside:
console.log('myDog.stroked: ' + myDog.stroked);


