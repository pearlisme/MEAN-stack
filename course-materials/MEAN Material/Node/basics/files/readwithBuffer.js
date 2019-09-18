﻿let fs = require('fs')
fs.open('info.txt', 'r', (err, handle) => {
    if (err) {
        console.log(`ERROR: 
            ${err.code}- ${err.message}`)
        return
    }
    let buf = new Buffer(1000000)
    fs.read(handle, buf, 0, 100000, null,
      (err, length) => {
        if (err) {
           console.log(`ERROR: 
            ${err.code}- ${err.message}`)
            return;
        }
        console.log(buf.toString('utf8', 0, length));
        fs.close(handle, function () { /* don't care */ });
    }
    );
});