const os = require("os")

//  info about current user
const user = os.userInfo()
console.log(user);

//  method returns the system upTime in seconds
console.log( `The system uptime in seconds: ${os.uptime()} seconds`)


const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    Freemem: os.freemem(),
}
console.log(currentOs);