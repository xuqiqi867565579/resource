// const gulp = require('gulp');
// const fs = require('fs');
const http = require('http');
// const writeStream = fs.createWriteStream('./src/aaa.js');
// gulp.src('./src/*.js').pipe(writeStream);

const {Readable} = require('stream');
console.dir(Readable);
http.createServer((req,res) => res.end('ok')).listen(3000);
