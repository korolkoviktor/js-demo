/*Create 2 objects: animal and cat, add move property to animal object, 
cat object must inherit move property from object animal*/
let animal = {
    smell: true,
    hear: true,
    watch: true
};
let cat = {
    __proto__: animal,
    sayMiau() {
        console.log('Cat say Miau');
    }
};
animal.move = true; // add new property

console.log(cat.move); //display result - cat inherit animal property
