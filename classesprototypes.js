/*Create 2 objects: animal and cat, add move property to animal object, 
cat object must inherit move property from object animal*/
class Animal {
    constructor() {
        this.smell=true;
        this.hear=true;
        this.watch=true;
    }
}

const animal=new Animal();
const cat = new Object();
cat.__proto__=animal;

animal.move = true; // add new property

console.log(cat.move); //display result - cat inherit animal property
