const raisinAlarm = function(cookie) {
  // does a chocolate chip cooke have raisins?
  // if yes, return "Raisin alert!"
  // if no, return "All good!"
  for (let raisins in cookie) {
    if (cookie[raisins] === "🍇")
      return "Raisin alert!";
  }
  return "All good!";
};

// TEST CODE
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));