//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
//const directoryPath = path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
//fs.readdir(directoryPath, function (err, files) {
fs.readdir('/home/megh/Documents', function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
		// find JS files and move them to Documents/Js
		if ( file.includes(".js") === true ) {
			console.log(`Js file = ${file}`);
			fs.copyFile(`/home/megh/Documents/${file}`,`/home/megh/Documents/Js/${file}`, err=> {
				if (err) return console.log(err);
				console.log('Success');
			})
		}
    });
});
