// const table = document.getElementById("table");
// const tableAttrs = table.attributes; 
// for (let i = 0; i < tableAttrs.length; i++) {
//   if (tableAttrs[i].nodeName.toLowerCase() === "border") {
//     table.border = "1";
//   }
// }
// table.summary = "note: increased border";

let div = document.querySelector("#myDiv");
console.log(div.innerHTML);  
div.innerHTML = "<p>helloe</p>"; 
