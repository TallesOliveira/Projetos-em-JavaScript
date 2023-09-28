let ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(ip.test("127.0.0.1"));
console.log(ip.test("88888-444"));