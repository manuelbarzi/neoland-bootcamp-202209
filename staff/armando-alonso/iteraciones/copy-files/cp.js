// Importamos el modulo 

filename = process.argv[2];
filenameCopy = process.argv[3];

const fs = require('fs')
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    console.log(data)
});

fs.copyFile(filename, filenameCopy, (err) => {
    if (err) {
        console.log('Error Found:', err);
    }
    console.log('Copied');
})

// fs.readFile(newFile, 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log('OK: ' + newFile);
//     console.log(data)
// });



// copyFile('helloworld.txt', 'helloworld3.txt')

// function readFile(arg) {
//     console.log(fs.readFileSync(arg, 'utf8'))
// }




// fs.copyFile('arg', 'elem', (err) => {
//     if (err) {
//         console.log('Error Found:', err);
//     }
//     else {
//         console.log(fs.readFileSync('elem', 'utf8'));
//     }
// })
