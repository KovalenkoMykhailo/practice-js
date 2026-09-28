var maxDepth = function (s) {
  var maxDepth = 0;
  var currentDepth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (s[i] === ")") {
      currentDepth--;
    }
  }
  return maxDepth;
};

let s = "(1+(2*3)+((8 + (2*(3+2)))/4))+1";
console.log("Maximum Nesting Depth", maxDepth(s));
