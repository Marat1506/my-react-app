/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
// import { useContext } from 'react';
// import { TasksDispatchContext } from '../Context/Context';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { TasksDispatchContext } from '../Context/Context';


// eslint-disable-next-line react/prop-types
export function Buttons({ handleDelete, handleEdit }) {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useContext(TasksDispatchContext)

    return (
        <Box>
            <IconButton onClick={handleDelete} sx={{ "&:focus": { outline: 'none' } }}>
                <DeleteOutlineIcon />

            </IconButton>
            {handleEdit ? <IconButton onClick={handleEdit} sx={{ "&:focus": { outline: 'none' } }}>
                <EditIcon />
            </IconButton>: null}
            
        </Box>


    )
}