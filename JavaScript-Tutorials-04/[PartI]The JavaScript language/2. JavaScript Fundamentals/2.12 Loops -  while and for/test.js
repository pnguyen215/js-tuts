console.log("The 'while' loop");

function handleUsingWhileLoop() {
  let i = 0;
  let j = 10;
  while (i < 10) {
    console.log(i);
    i++;
  }
  console.log();
  while (j) {
    console.log(j);
    j--;
  }
}

handleUsingWhileLoop();

console.log("The 'do...while' loop");

function handleUsingDoWhileLoop() {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 10);
}
handleUsingDoWhileLoop();

console.log("The 'for' loop");

function handleUsingForLoop() {
  let i = 0;
  let j = 10;
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log();
  for (; j > 0; j--) {
    // this is called 'Skipping parts'
    console.log(j);
  }
}
handleUsingForLoop();

console.log("Breaking the loop using keyword - break");

function handleUsingBreak() {
  let i = 20;
  while (i > 0) {
    if (i % 2 == 1) {
      break;
    }
  }
}

handleUsingBreak();

console.log("Continue to the next iteration");

function handleUsingContinue() {
  let oddArrays = [];
  let evenArrays = [];
  for (let i = 0; i < 30; i++) {
    if (i % 2 == 0) {
      evenArrays.push(i);
    } else {
      oddArrays.push(i);
    }
  }
  console.log("Array include odd numbers: " + oddArrays);
  console.log("Array include even numbers: " + evenArrays);
}

handleUsingContinue();

console.log("Labels for break/continue");

function breakout() {
  let arrays2D = [];
  outer: for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let question = prompt(`value at coords (${i}, ${j})`, "");
      arrays2D.push([i, j]);
      if (!question) break outer;
    }
  }
  alert(arrays2D);
}

console.log("Get information...");

function getInfo() {
  alert("while – The condition is checked before each iteration.");
  alert("do..while – The condition is checked after each iteration.");
  alert(
    "for (;;) – The condition is checked before each iteration, additional settings available."
  );
  alert(
    "To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive."
  );
  alert(
    "If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive."
  );
  alert(
    "break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one"
  );
}