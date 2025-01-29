function taskReducer(tasks,action){
    switch(action.type){
        case 'added':{
            return[
                ...tasks,
                {
                    id:action.id,
                    text:action.text,
                    done:false
                }
            ]
        }
    }
}
export default taskReducer;