//You want to get some snack like boba & seblak, and in
//your pocket, you only have Rp.20.000, there's price list of snack

// --Boba Rp.5000, estimated time to get boba; 5 Second
// --Seblak Rp.8000, estimated time to get Seblak; 9 Second

// You asked to create program to solve this problem using callback function

let uang = (uang) => {
  console.log("", uang);
};

let boba = function jajanboba(callback) {
  setTimeout(() => {
    callback("sisa uang kamu Rp.15000");
  }, 5000);
};

console.log("kamu jajan boba dengan harga Rp.5000");
boba(uang);

let seblak = function jajanseblak(callback) {
  setTimeout(() => {
    callback("sisa uang kamu Rp.7000");
  }, 9000);
};

console.log("kamu jajan seblak dengan harga Rp.8000");
seblak(uang);
