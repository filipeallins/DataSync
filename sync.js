//adaptar ao projeto
const fs = require('fs');
const path = require('path');

let filename = 'mainisp.jpg';
let src = path.join(__dirname, filename);
let destDir = path.join(__dirname, 'test');

fs.access(destDir, (err) => {
  if(err)
    fs.mkdirSync(destDir);

  copyFile(src, path.join(destDir, filename));
});


function copyFile(src, dest) {

  let readStream = fs.createReadStream(src);

  readStream.once('error', (err) => {
    console.log(err);
  });

  readStream.once('end', () => {
    console.log('done copying');
  });

  readStream.pipe(fs.createWriteStream(dest));
}