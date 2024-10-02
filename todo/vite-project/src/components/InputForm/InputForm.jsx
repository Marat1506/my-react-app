import { IconButton, TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import { useContext, useState } from "react";
import { TasksDispatchContext } from "../Context/Context";

// eslint-disable-next-line react/prop-types
let nextId = 0;
export function InputForm() {
    const [taskName, setTaskName] = useState('');
    const dispatch = useContext(TasksDispatchContext)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(taskName.trim() === ''){
            return
        }
        dispatch({ type: 'ADD_TASK', task: taskName, checked: false, id: nextId++ })
        setTaskName('')
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <TextField value={taskName} onChange={(e) => setTaskName(e.target.value)} id="standard-basic" label="Название новой задачи"
                variant="standard" fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleFormSubmit}>
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
        </form>
    )
}

