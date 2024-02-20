const { readFileSync , writeFileSync }= require('fs');

//  Reading two files
const first = readFileSync('./Content/first.txt','utf-8');
const second = readFileSync('./Content/Subfolder/second.txt','utf-8');

console.log(first,second);
//  Combining two files and creating new one auto by node
writeFileSync(
    './Content/result-sync.txt',`Here is the result: ${first},${second}`,
   {flag:'a'}
)