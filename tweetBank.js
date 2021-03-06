var _ = require('lodash');

var data = [];

// //Original add function
// function add (name, text) {
//   data.push({ name: name, text: text });
// };

// New add function
var addFunc = function (){
    var timesCalled = 0;
    
    return function (name, text) {
        data.push({name: name,text: text,id: timesCalled});
        timesCalled++;
        return timesCalled;
    };
};

var add = addFunc();
//-------


function list () {
  return _.cloneDeep(data);
};

function find (properties) {
  return _.filter(data, properties);
};

module.exports = { add: add, list: list, find: find };











//tweetBank.js sample data seed

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

module.exports.add("Gustavo", "awesome");

//console.log(data);
//console.log(find(data.name));



