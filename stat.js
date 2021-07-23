const fs = require('fs')
fs.stat('/Users/Indhu/Desktop/React Notes.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats.isFile())
  console.log(stats.isDirectory() )
  console.log(stats.isSymbolicLink()) 
  console.log(stats.size )
})