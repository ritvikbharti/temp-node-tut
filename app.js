const a = require('lodash');

let arr = [1,2,[3,4,o8tfuryxut[5,[6]]]];

const newarr = a.flatMapDeep(arr);
console.log(newarr);
