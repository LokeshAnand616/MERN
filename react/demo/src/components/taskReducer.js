function taskReducer(tasks,action){
    switch(action.type){
        case 'add':{
            return[
                ...tasks,
                {
                    id:tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                    name:action.payload.name,
                    done:false
                }
            ]
        }
        case 'edit':{
            return tasks.map(task =>
                task.id === action.payload.id?
                {...task,name:action.payload.name}
                :task
            )
        }
        case 'delete':{
            return tasks.filter(task=>task.id !== action.payload.id)
        }
        default:{
            return console.log('error')
        }
    }
}
export default taskReducer;