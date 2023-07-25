
const file = require('fs')

// stream concept writing and reading
const readStream = file.createReadStream(path.join(__dirname,'files','doc.txt'),{encoding: 'utf-8'})
const writeStream = file.createWriteStream(path.join(__dirname,'files','mydoc.txt'))


// method - 1
readStream.on("data",(datachunk)=>{
    writeStream.write(datachunk)
})

// method -2
readStream.pipe(writeStream)