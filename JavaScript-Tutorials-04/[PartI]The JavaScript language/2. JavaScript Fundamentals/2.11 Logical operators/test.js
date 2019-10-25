// 
console.log("||(OR)")
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(1 || 0);
console.log(true || "no problemn");
console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0);

console.log("Getting the first truthy value from a list of variables or expressions.");
let currentUser = "phuocnguyen";
let defaultUser = null;
let user = currentUser || "unnamed" || defaultUser;
console.log(user);

console.log("&&(AND)")
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(1 && 0); // 0
console.log(1 && 6); // 6
console.log(null && 7); // null
console.log(0 && null); // 0
console.log(null && "no matter what"); // null
console.log(1 && 3 && null); // null
console.log(1 && 2 && 3); // 3


console.log("! (NOT)");
console.log(!true); // false
console.log(!0); // true 
console.log("A double NOT !! is sometimes used for converting a value to boolean type");
console.log(!!"no matter what"); // true
console.log(!!null); // false
console.log("the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.");
console.log(Boolean("no matter what")); // true
console.log(Boolean(null)); // false