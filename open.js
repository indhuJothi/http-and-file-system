const fs = require('fs')

fs.open('/Users/Indhu/Desktop/test.txt','r+',(err, fd) => {
  console.log('file opened')
})

