const unroll = require("./unroll");

const inputGrid = [
  [1, 2, 3, 10],
  [4, 5, 6, 11],
  [7, 8, 9, 12],
  [16, 15, 14, 13]
];

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });


});
describe("Run unroll function", function () {

  it("Running", function () {
    expect(unroll(inputGrid)).toEqual([
      1,  2,  3, 10, 11, 12,
     13, 14, 15, 16,  7,  4,
      5,  6,  9,  8
    ])
  });


});




