const fs = require('fs');

/*
process.stdin.setEncoding('utf8');
console.log("Type ur text and press enter to terminate line(ctrl + c)")

process.stdin.on('readable',()=>{
    let chunk = process.stdin.read();
    if(chunk != null){
        process.stdout.write('You typed:'+chunk)
    }
})
*/

// Blocking code

/*
const fs = require('fs');

// Level 1; Read and write files
// Blocking code with file

let readMe = fs.readFileSync('readme.txt','utf8');
console.log(readMe)

fs.writeFileSync('writeme.txt',readMe)
*/

// Non Blocking 

/*
const fs = require('fs');
fs.readFile('readme.txt','utf8',(error,data)=> {
    if(error) console.log(error)
    console.log('Work done: '+data)

    fs.writeFile('writeme1.txt',data,()=>{
        console.log('Done writing')
            fs.unlink('writeme1.txt',(err)=>{
                if(err) console.log(err)
                console.log("file is deleted")
            })
    })

        
})
console.log('doing some work....')
*/

/*
//fs.mkdirSync('test');
//fs.rmdirSync('test');
fs.mkdir('test',()=>{
    fs.readFile('readMe.txt','utf8',(err,data)=>{
        fs.writeFile('./test/writeMe.txt',data,
         (err)=>{
            if(err) console.log(err);
            console.log('Done writing into file')
        });
    })
})

//remove the directory
fs.unlink('./test/writeMe.txt',()=>{
    fs.rmdir('test',()=>{console.log("directory is removed")})
});
*/

// File Watcher

/*
fs.watch('readme.txt',(event)=>{
    console.log(`File 'readme.txt' just changed! ${event}`)
})

console.log('Now watching readme.txt for changes...')

*/

// Folder Watcher

/*
fs.watch('../files',(event)=>{
    console.log(`File 'readme.txt' just changed! ${event}`)
})

console.log('Now watching readme.txt for changes...')
*/