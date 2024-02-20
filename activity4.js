const fs = require('fs');
const zlib = require('zlib');


let originalData = fs.readFileSync('txt/input.txt', 'utf8');

let compressedData = zlib.gzipSync(originalData);

fs.writeFileSync('compressed.gz', compressedData);


let readCompressedData = fs.readFileSync('compressed.gz');


let decompressedData = zlib.gunzipSync(readCompressedData);

fs.writeFileSync('decompressed.txt', decompressedData);

let originalSize = fs.statSync('original.txt').size;
let compressedSize = fs.statSync('compressed.gz').size;
let decompressedSize = fs.statSync('decompressed.txt').size;

console.log(Original file size: ${originalSize} bytes);
console.log(Compressed file size: ${compressedSize} bytes);
console.log(Decompressed file size: ${decompressedSize} bytes);
const fs = require('fs');

let data1 = JSON.parse(fs.readFileSync('./abc.json', 'utf8'));

data.name = 'new_value';

let jsonData = JSON.stringify(data1);

fs.writeFileSync('your_file.json', jsonData);