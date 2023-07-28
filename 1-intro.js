// console.log(`hey it's my first node app`);
//*** LIST CURRENT DIRECTORY 
//console.log(__dirname);
// setInterval(() => {
// console.log("HELLO WORLD")
// }, 1000)

// const peter = 'peter'
// const john = 'john'
// const sayHi = (name) => {

//     console.log(`Hello there ${name}`)
// }

// sayHi("susan")

                   //// *** MODULES
// const names = require('./name')
//  const sayHi = require('./utils')
                   
// sayHi(names.a)
// sayHi(names.b)

// const names = require('./name')
// const sayHi = require('./utils')
// const data = require('./alternative_flavor')
// require('./7-mindgrened')

//sayHi(data.singleperson.name)
//sayHi(names.a)
//sayHi(names.b)

        //*** OS module
//         const os = require('os')
// const user = os.userInfo()

// //info about current user
// console.log(user)

// //** uptime in seconds
// console.log(`sytem uptime is ${os.uptime()}`)

// const currentOS = {
// name: os.type(),
// release: os.release(),
// totalMem: os.totalmem(),
//  freemem: os.freemem()

// }
// console.log(currentOS)
           // path module
//            const path = require('path')
// //console.log(path.sep)
// const filepath = path.join('/content','subfolder','test.txt')
// console.log(filepath)
// const base = path.basename(filepath)
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(base)
// console.log(absolute)

           //*** filesync module ***//
           //*** synchronous method
//            const {readFileSync, writeFileSync} = require('fs')
// const { send } = require('process')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first,second)

// writeFileSync(
//     './content/resultsync.txt',` hello this is resule: ${first}, ${second}`,{flag: 'a'}
//     )

// *** asynchronous file operations(callback functions)

// const {readFile, writeFile} = require('fs');
// const { resourceLimits } = require('worker_threads');

// readFile('./content/first.txt','utf8' ,(err,result) => {
//  if(err){
//    console.log(err)
//    return
//  }
//  const first = result;

// readFile('./content/second.txt','utf8' ,(err,result) => {
//     if(err){
//       console.log(err)
//       return
//     }
//     const second = result;
//     writeFile(
//         './content/result-async', `Here is thr result async: ${first}, ${second}`,(err,result) => {
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log(result)
//         }
//         )

// })
 
// })
