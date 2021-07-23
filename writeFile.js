const fs = require('fs')

const content = 'and writFile adding some content!'

fs.writeFile('/Users/Indhu/Desktop/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
})
  fs.readFile('/Users/Indhu/Desktop/test.txt', 'utf-8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('I am from readFile '+ data)
  })
  