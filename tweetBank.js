const _ = require("lodash");

let data = [];

function add (name, content ,id) {
  data.push({ name: name, content: content , id: id});
}

function list () {
  return _.cloneDeep(data); //clone copy array
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties)); //filter compare and filter
}

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

module.exports = { add: add, list: list, find: find };

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() , i + 1);
}
