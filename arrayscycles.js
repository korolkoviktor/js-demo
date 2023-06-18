/* 1. Given an array consisting of movie names, iterate over the array with the output of the names 
of each movie to the console*/
let movieCollection = ['Alien', 'Kingdom of Heaeven', 'Chronicles of Riddik '];
movieCollection.forEach(item => console.log(item));

// 2. Given an array of car manufacturers, convert the array to a string and back to an array
console.log('\nConversion an array to a string and back to an array:');
let carNamesArr = ['Ford', 'Toyota', 'Audi'];
let carNamesStr = carNamesArr.join(','); //array convert to a string
console.log(typeof carNamesStr);
let carNamesConvertArr = carNamesStr.split(',');//string convert to an array
console.log(typeof carNamesConvertArr);

// 3. Given an array of the names of your friends, add the words hello to each element of the array
let namesFriends = ['Alex', 'Andrew', 'Mark'];
namesFriends = namesFriends.map(name => 'Hello ' + name);
console.log('\nAdd word Hello to each alement of the array:');
console.log(namesFriends);

// 4. Convert numeric array to Boolean
let arrNum = [1, 7, 0, -3];
let arrBool = arrNum.map(item => Boolean(item));
console.log('\nConvertion numeric array to Boolean:');
console.log(arrBool);

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order
let arrForSort = [1, 6, 7, 8, 3, 4, 5, 6];
arrForSort.sort((a, b) => b - a);
console.log('\nArray sorting:');
console.log(arrForSort);

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3
let arrForFilter = [1, 6, 7, 8, 3, 4, 5, 6];
let newArr = arrForFilter.filter(num => num > 3);
console.log('\nFilter the array:');
console.log(newArr);

/* 7. Write a function that takes two parameters - an array and a number and outputs the index 
of an array element equal to a number*/
function displArrElem(arr, elemnum) {
    return (elemnum < 0 || elemnum>arr.length-1) ?
        console.log(`The number parametr should be =>0 and <= ${arr.length}`): 
        console.log(arr.findIndex((ind)=>ind==elemnum));
};
console.log('\nOutput the index of an array:');
displArrElem([4, 4, 8, 1, 2], 5);
displArrElem([4, 4, 8, 1, 2], -1);
displArrElem([4, 4, 8, 1, 2], 1);

// 8. Implement a loop that will print the number 'a' until it is less than 10
let a = 30;
console.log('\nOutput the the number:');
while (a > 10) {
    console.log(a);
    a -= 10
};

// 9. Implement a loop that prints prime numbers to the console
console.log('\nPrime numbers:');
mark:
for (let item = 2; item < 10; item++) {
    for (let lit = 2; lit < item; lit++) {
        if (item % lit == 0) {
            continue mark;
        };
    };
    console.log(item);
};


// 10. Implement a loop that prints odd numbers to the console
console.log('\nOdd numbers:');
for (i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
};
