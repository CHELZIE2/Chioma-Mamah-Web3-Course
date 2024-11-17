// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((acc, current) => acc.concat(current), []);
console.log(flattened);  // → [1, 2, 3, 4, 5, 6]

// Your own loop
function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Everything I: using a loop
function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));  // → true
console.log(every([2, 4, 16], n => n < 10)); // → false
console.log(every([], n => n < 10));         // → true

// Everything II: using the some method
function every(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));  // → true
console.log(every([2, 4, 16], n => n < 10)); // → false
console.log(every([], n => n < 10));         // → true

// Dominant writing direction
// Assume characterScript and countBy are already defined.
function characterScript(code) {
  // This is a simplified version of what the characterScript function might look like.
  // It would return the script (ltr, rtl, ttb) for a given character code.
  // Here is an example of scripts mapping for demonstration.
  const scripts = [
    { name: "Latin", range: [65, 90], direction: "ltr" },  // A-Z
    { name: "Arabic", range: [1536, 1791], direction: "rtl" },  // Arabic range
    { name: "Chinese", range: [19968, 40959], direction: "ttb" }  // Chinese characters
  ];
  for (let script of scripts) {
    if (code >= script.range[0] && code <= script.range[1]) {
      return script;
    }
  }
  return null;
}

function countBy(array, groupFn) {
  let counts = [];
  for (let element of array) {
    let group = groupFn(element);
    let knownGroup = counts.find(c => c.name === group);
    if (knownGroup) {
      knownGroup.count++;
    } else {
      counts.push({ name: group, count: 1 });
    }
  }
  return counts;
}

function dominantDirection(text) {
  // Map each character to its direction using characterScript
  let directions = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : null;
  });

  // Find the direction with the highest count
  let maxDirection = directions.reduce((max, dir) => dir.count > max.count ? dir : max, { count: 0 });

  return maxDirection.name;
}

console.log(dominantDirection("Hello, world!")); // → ltr
console.log(dominantDirection("مرحبًا بالعالم")); // → rtl
console.log(dominantDirection("你好，世界")); // → ttb
