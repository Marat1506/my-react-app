
import { IconButton, TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import SaveIcon from '@mui/icons-material/Save';
import { TasksDispatchContext } from "../Context/Context";
import { useState } from "react";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
export function EditForm({ text, setEdit, id }) {
    const dispatch = useContext(TasksDispatchContext)
    const [task, setTask] = useState(text)
    console.log("task = ", task)

    const handleEdit = (e) => {
        e.preventDefault()
        console.log("Edit");
        setEdit(false)
        if(task.trim() === '')return
        dispatch({ type: 'CHANGE_TASK', task: task, id: id })

    }


    return (
        <form onSubmit={handleEdit}>
            <TextField value={task} onChange={(e) =>setTask(e.target.value)} label="Название новой задачи"
                variant="standard" fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleEdit} >
                                <SaveIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
        </form>
    )
}