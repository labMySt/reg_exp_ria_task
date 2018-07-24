var strings = require("./strings.js");
var req_exp = require("../index.js");
const length = strings.length;
console.log("length", length)

for(let i = 0; i < length; i++) {
  var mass = new RegExp(req_exp)
  .exec(strings[i]);
  console.log(`${i+1}-->${mass}`);
}
