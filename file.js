// console.log("hellow world")
// setTimeout(() => {
//     console.log("async task")
// }, 14000);                           event loop 
// console.log("hellow world 1")
// console.log("hellow world 2")
// let i = 0;
// while(i<1000){
//     console.log("hellow world 3")
//     i++;
// }
let http = require('http')

let fs = require('fs')
for(let i = 0;i<100000;i++){
    fs.writeFileSync('./textFile.txt',`Hello world ${i} \n`,{flag : 'a'})
}
//streams 
// let stream = fs.createReadStream('./textFile.txt',{highWaterMark: 90000,encoding: 'utf-8'})
// stream.on('data',(chunk)=>{
//    // console.log(chunk)
    
// })

http.createServer((req,res)=>{

    let stream = fs.createReadStream('./textFile.txt',{highWaterMark: 20000,encoding: 'utf-8'})
   
    stream.on('open',()=>{
        // res.end(chunk)
        
        stream.pipe(res)
        console.log("done")
    })
    stream.on('error',()=>{
        res.end("Internal server error")
    })

}).listen(5000)
