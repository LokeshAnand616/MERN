const orders = [
    {
      orderId: "ORD001",
      buyer: "Alice",
      items: [
        { name: "Laptop", price: 1, quantity: 1 },
        { name: "Mouse", price: 1, quantity: 1 }
      ]
    },
    {
      orderId: "ORD002",
      buyer: "Bob",
      items: [
        { name: "Monitor", price: 1, quantity: 1 },
        { name: "Keyboard", price: 1, quantity: 1 },
        { name: "Mouse", price: 1, quantity: 1 }
      ]
    },
    {
      orderId: "ORD003",
      buyer: "Charlie",
      items: [
        { name: "Laptop", price: 1, quantity: 1 },
        { name: "Monitor", price: 1, quantity: 1 }
      ]
    }
  ];
  
  const totalRevenue = orders.reduce((a,c)=>a+c.items.reduce((a,c)=>a+=c.price*c.quantity,0),0)
  const productCounts = orders.reduce((a,c)=>a+c.items.length,0)
//   const totalRevenue = orders.reduce((acc, order) => 
//     acc + order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
// , 0);


console.log(totalRevenue)
console.log(productCounts);
// console.log(mostPurchasedProduct);
// console.log(summaryReport);


