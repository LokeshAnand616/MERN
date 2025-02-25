let s = "babadsaaas";

console.log(
  s
    .split("")
    .map((_, i) => s.split("").map((_, j) => s.slice(i, j + 1)))
    .flat()
    .filter((str) => str === str.split("").reverse().join(""))
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    )
);
