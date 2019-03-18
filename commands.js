const fs = require("fs")

const readTodoFile = (fileName) =>{
    try{
        return JSON.parse(fs.readFileSync(fileName))
    } catch(e) {
        console.log(e)
        return []
    }
}

const writeTodoFile = (fileName,arr) =>{
    fs.writeFileSync(fileName,JSON.stringify(arr))
}

const add = (title,desc,pri,st) =>{
    const todoFile = readTodoFile("todo_file.json")
    const index = todoFile.findIndex((x)=>x.title===title)
    if(index==-1)
    {
        if(title)
        {
            todoFile.push({
                "title":title,
                "description":desc,
                "priority":pri,
                "status":st
            
            })
            writeTodoFile("todo_file.json",todoFile)
            console.log(`Added Todo with title - ${command}`)
        }
        else
        {
            console.log("Title required to add a todo!")
        }
    }
    else
    {
        console.log("A todo with same title already exists!")
    }
}

const printAllTodos = () => {
    console.log(readTodoFile("todo_file.json"))
}

const del = (title) =>{
    const todoFile = readTodoFile("todo_file.json")
    const index = todoFile.findIndex((x)=>x.title===title)
    if(index!=-1)
    {
        todoFile.slice(index,1)
        writeTodoFile("todo_file.json",todoFile)
        console.log(`Deleted Todo with title - ${command}`)

    }
    else
    {
        console.log(`Todo with ${title} not found to delete!`)
    }
}

const update =(title)=>{
    const todoFile = readTodoFile("todo_file.json")
    const index = todoFile.findIndex((x)=>x.title===title)
    if(index===-1)
    {
        console.log(`Todo with a title ${title} not found to mark as done!`)
    }
    else
    {
        todoFile[index].status=true
        writeTodoFile("todo_file.json",todoFile)
        console.log(`${command} operation done! check changes with "print" command`)
    }
}

const getPending = () => {
    const todoFile = readTodoFile("todo_file.json")
    const result = todoFile.map(todo => (todo.status === "false"))  
    console.log(`Pending Todos:\n ${result}`)
}

const getCompTodos = () => {
    const todoFile = readTodoFile("todo_file.json")
    const result = todoFile.map(todo =>(todo.status))
    console.log(`Completed Todos:\n${result}`)
}

module.exports = {
    add,
    printAllTodos,
    del,
    update,
    getPending,
    getCompTodos,
}