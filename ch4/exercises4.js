// SUM OF A RANGE

function range(start, stop, step=1) {

    let rangeArr = [];
    let i = start;

    do {
        rangeArr.push(i);
        i+=step;
    } while (i != stop);

    rangeArr.push(stop);

    return rangeArr;
}

function sum(arr) {
    let numSum = 0;
   for(let value of arr) {
    numSum+= value;
   }
   return numSum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


/*
Reversing an array
Arrays have a reverse method that changes the array by
inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray,
takes an array as argument and produces a new array
that has the same elements in the inverse order.
The second, reverseArrayInPlace,
does what the reverse method does: it modifies
the array given as argument by reversing its elements.
 Neither may use the standard reverse method.
*/

function reverseArray(arr) {
    let reversed = []

    for(let i = 0; i <= arr.length+1; i++){
        reversed.push(arr.pop())
    }
    return reversed;
}

function reverseArrayInPlace(arr) {
    length = Math.floor(arr.length / 2);
    for(let i = 0; i < length; i ++){
        first = arr[i];
        second = arr[arr.length - 1 - i];

        arr[i] = second;
        arr[arr.length - 1 - i] = first;
    }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/*
 Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
 Also write a listToArray function that produces an array from a list.
 Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
 and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or
 undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(arr) {
    let basket = [];
    for (let i = 0; i < arr.length; i++) {
        let egg = {value: arr[i], rest: null};
        basket.push(egg);
    }

    basket.reverse();

    for (let i = 0; i < basket.length; i++){
        let removedEgg = basket.shift();
        basket[0].rest = removedEgg;

    }
    return basket.pop();
}

function listToArray(list) {
    let array = [];
    let shouldBreak = false;
    while (true) {
        if (shouldBreak) {
            break;
        }
        for (let properties in list) {
            if (list[properties] === null) {
                shouldBreak = true;
            } else if (Object.getPrototypeOf(list[properties]) !== Object.getPrototypeOf(1)) {
                list = list[properties];
            } else if (Object.getPrototypeOf(list[properties]) === Object.getPrototypeOf(1)) {
                array.push(list[properties])
            }
        }
    }

    return array;
}

function prepend(ele, list) {
    return {value: ele, rest: list};
}

function nth(list, number) {
    let count = 0;
    for(let node = list; node; node = node.rest) {
        if (count == number) {
            return node.value;
        }
        count += 1;

    }
}

function recursiveNth(list, index, count=0) {
    if (index == count){
        console.log(` DOES INDEX == COUNT HAPPEN? -> ${index == count}`);
        return list.value;
    }
    return recursiveNth(list.rest, index, count+=1);

}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(recursiveNth(arrayToList([10, 20, 30]), 1))
//let list = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}};
//console.log(list['rest']['rest']);



/*
Deep comparison

The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared,
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

*/
function deepEqual(firstObj, secondObj) {
    /*if (typeof(firstObj) === typeof(secondObj)){
        return true;
    }*/
    if (Object.keys(firstObj).length == Object.keys(secondObj).length) {
        for (let key of Object.keys(firstObj)) {
            if (typeof(firstObj[key]) != typeof(secondObj[key])) {
                return false;
            }
        }
    }
    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
