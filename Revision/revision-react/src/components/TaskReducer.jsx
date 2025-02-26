export const TaskReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, { id: action.id, task: action.task }];
        default:
            return state; 
    }
};
