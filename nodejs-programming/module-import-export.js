// how to use any module
// we import a module ==> when we want to a module
// Commonjs (ES5) [server] way
const http = require("http");

// Module js (ES6) [client] way
//import http from 'http'

// export module ==> when we want to share a module to other files of project

// Commonjs (ES5) [server] way
module.exports = NameOfModule;

// Module js (ES6) [client] way
export default NameOfModule;
