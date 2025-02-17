console.log('Start');
 
process.nextTick(() => {
  console.log('Next Tick');
});
 
setImmediate(() => {
  console.log('Set Immediate');
});
 
console.log('End');