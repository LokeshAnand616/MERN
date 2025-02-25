let str = "He is a software engineer. software new engineer";
str = str.split(" ").map(word => word === "software" ? "senior" : word).join(" ");
console.log(str);
