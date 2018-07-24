const unswers = require("./unswers.js");
const strings = require("./strings.js");
const req_exp = require("../index.js");


  const length = strings.length;
  for(let i = 0; i < length; i++) {
    test(`task ${i+1}`, () => {
      var mass = new RegExp(req_exp)
      .exec(strings[i]);
      for(let j = 0;j<15;j++){
        expect(mass[j]).toEqual(unswers[i][j]);
      }
    })
  }
