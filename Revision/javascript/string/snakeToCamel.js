let str = "hello_world_lokesh_iyyappan";

console.log(str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()))