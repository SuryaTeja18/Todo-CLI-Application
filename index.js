const fs = require('fs')
const yargs = require('yargs')
const commands = require('./commands')

const command = yargs.argv._[0]
console.log(`Starting ${command} operation...`)

if(command==="add")
{
    commands.add(yargs.argv["title"],yargs.argv["desc"],yargs.argv["pri"],yargs.argv["status"])
}
else if(command==="print")
{
    commands.printAllTodos()
}
else if(command==='del')
{
    commands.del(yargs.argv["title"])
}
else if(command==='markTrue')
{
    commands.update(yargs.argv["title"])
}
else if(command==="getPending")
{
    commands.getPending()
}
else if(command==="getCompTodos")
{
    commands.getCompTodos()
}
else
{
    console.log("Invalid command..Please Enter a CRUD Command.")
}