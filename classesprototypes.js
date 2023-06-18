/*Create 2 objects: animal and cat, add move property to animal object, 
cat object must inherit move property from object animal*/
class Animal {
    constructor() {
        this.smell=true;
        this.hear=true;
        this.watch=true;
        this.move=true;
    }
}
class Cat extends Animal {
    constructor() {
        super();
        this.tail=true;
    }
}
const cat = new Cat();
console.log(cat.move); //display result - cat inherit animal property