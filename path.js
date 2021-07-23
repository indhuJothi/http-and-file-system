//path.dirname,basename,extname, exact filename without extn, join the path, resolve, normalize

const path = require('path');

const file = '/Users/Indhu/Desktop/test.txt';
console.log('------------------------')
console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))
console.log('------------------------')
console.log('we can extract the file name only without the extenstion by the dollowing method')

console.log('------------------------')
console.log(path.basename(file, path.extname(file)))
console.log('------------------------')
const name = 'Indhu'
console.log(path.join('/','Users',name,'test.txt'))

console.log(path.resolve('test.txt'))// it resolve the path with the current directory
console.log(path.resolve('basepath','test.txt'))// it use the first argument is base for sec argument
console.log(path.resolve('/basepath','test.txt'))// here '/' is mentioned so the it take the first as basepath for second 
console.log(path.normalize('/users/Indhu/..//test.txt'))