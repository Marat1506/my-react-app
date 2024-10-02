/* eslint-disable react/jsx-key */
import { useContext} from "react"
import { Task } from "../Task/Task"
import { TasksContext } from "../Context/Context"

export function TaskList() {
    const tasks = useContext(TasksContext)
    console.log("tasks = ", tasks)
    // eslint-disable-next-line no-unused-vars
    let i = 0;
    tasks.map((task) =>{
        if(task.checked) i++;
    })

    return (
        <>
        {tasks.length - i !== 0 ? <p>план({tasks.length -  i})</p>: null}
        
            {tasks.map((task, index) => (
             
                !task.checked ?
                <Task key={index} text={task.task} id={task.id} checked={task.checked}/>: null
                
            ))}
            {i !== 0 ? <p>готово({i})</p>: null}
        
        {tasks.map((task, index) => (
                task.checked ?
                <Task key={index} text={task.task} id={task.id} checked={task.checked}/>: null
                
            ))}
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function taskReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                task: action.task,
                checked: action.checked,
                id: action.id
            }];
        case 'DELETE_TASK':
            return state.filter(task => task.id != action.id)
        case 'CHANGE_TASK':
            return state.map(task => {
                if(task.id === action.id){
                    return {...task, 
                        task: action.task,
                    }
                }
                return task
            })
        case 'CHECKED':
            return state.map(task => {
                if(task.id === action.id){
                    return {...task, 
                    checked: action.checked}
                }
                return task
            })
    }
}