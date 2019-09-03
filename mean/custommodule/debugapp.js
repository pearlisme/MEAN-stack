var a = 0;
function init() {
  a = 1;
}
function incr() {
  var a = a + 1;    
}
debugger;
init();
console.log('a before: %d', a);
incr();

console.log('a after: %d', a);
for (var i=0;i<5;i++){
  console.log(i);
}