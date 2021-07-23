const fs = require('fs')

fs.readFile('/Users/Indhu/Desktop/test.txt', 'utf-8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('I am from readFile '+ data)
})


try {
    const data = fs.readFileSync('/Users/Indhu/Desktop/test.txt', 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }