
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const greetingsPath = path.resolve(__dirname, 'contracts', 'Greetings.sol');
const source = fs.readFileSync(greetingsPath, 'utf-8'); 

module.exports = solc.compile(source, 1).contracts[':Greetings'];
//console.log(solc.compile(source, 1)); 
