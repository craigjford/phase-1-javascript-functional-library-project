
function alert(value) {
    return value;
} 

function myEach(collection, cb) {
  
    let resultArr = [];
    let myArr = [];
    if (Array.isArray(collection)) {
        myArr = collection
    } else {
        myArr = Object.values(collection);
    }
    for (let item of myArr) {
        resultArr.push(cb(item));
    };

    return collection;
}

function myMap(collection, cb) {
    let myArr = [];
    if (Array.isArray(collection)) {
        myArr = collection
    } else {
        myArr = Object.values(collection);
    }

    const newMap = myArr.map(num => cb(num))
    return newMap;
}

function myReduce(collection, cb, acc) {

    let myArr = [];
    let newArr = [];

    if (Array.isArray(collection)) {
        myArr = collection;
    } else {
        myArr = Object.values(collection);
    }

    let newSum = 0;

    if (typeof(acc) === 'number') {
        newArr = myArr;
        newSum = acc;
    } else {
        newArr = myArr.slice(1);
        newSum = myArr[0];
    }

    for (let item of newArr) {
        newSum = cb(newSum, item, newArr);
    };

    return newSum;
}

function myFind (collection, predicate) {

    let myArr = [];
    if (Array.isArray(collection)) {
        myArr = collection
    } else {
        myArr = Object.values(collection);
    }

    const newFind = myArr.find(num => predicate(num))

    return newFind;
}

function myFilter (collection, predicate) {
    let resultArr = [];
    let myArr = [];
    if (Array.isArray(collection)) {
        myArr = collection
    } else {
        myArr = Object.values(collection);
    }

    const newFilter = myArr.filter(num => predicate(num))
    resultArr.push(newFilter)
    return newFilter;
}

function mySize (collection) {
    let myArr = [];
    if (Array.isArray(collection)) {
        myArr = collection
    } else {
        myArr = Object.values(collection);
    }
    const newSize = myArr.length

    return newSize;
}

function myFirst (inArr, n=0) {
    if (n === 0) {
        return inArr[0];
    } else {
        return inArr.slice(0, n)
    }
}


function myLast (inArr, n=0) {
    if (n === 0) {
        return inArr[inArr.length - 1];
    } else {
        return inArr.slice(n * -1)
    }
}

function myKeys (keyObj) {

    let resultArr = [];
    let myArr = [];
    myArr = Object.keys(keyObj);

    for (let item of myArr) {
        resultArr.push(item)
    }
    return resultArr;
}

function myValues (keyObj) {

    let resultArr = [];
    let myArr = [];
    myArr = Object.values(keyObj);

    for (let item of myArr) {
        resultArr.push(item)
    }
    return resultArr;
}

