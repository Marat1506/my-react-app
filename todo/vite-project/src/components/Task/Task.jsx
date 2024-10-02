import { Box, Checkbox, Typography } from "@mui/material"
import { Buttons } from '../Buttons/Buttons';
import { useContext } from "react";
import { TasksDispatchContext } from "../Context/Context";
import { useState } from "react";
import { EditForm } from "../Edit/Edit";


// eslint-disable-next-line react/prop-types
export function Task({text, id, checked}) {
    console.log('t= ', text)
    const [edit, setLocalEdit] = useState(false);
    const dispatch = useContext(TasksDispatchContext)
    const handleDelete = () => {
        // Вызывает функцию handleDelete с передачей id
        dispatch({ type: 'DELETE_TASK', id: id });
    };
    const handleEdit = () => {
        console.log("EEEEE")
        setLocalEdit(true)
    }
    const changeChecked = () => {
        console.log("CHECKED")
        dispatch({type: 'CHECKED', id: id, checked: !checked})
        console.log('ch = ', checked)
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {edit ? (
                <EditForm text={text}  setEdit={setLocalEdit} id={id} key={id}/>
            ) : (
                <>
                <Checkbox onChange={changeChecked} checked={checked}/>
                <Typography>{text}</Typography>
                {checked ? <Buttons handleDelete={handleDelete}/>:
                 <Buttons handleDelete={handleDelete} handleEdit={handleEdit}/>}
               
                </>
                
            )}
           
        </Box>
    )
}