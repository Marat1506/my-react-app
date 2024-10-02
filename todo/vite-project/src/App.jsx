
import { Logo } from './components/Logo/Logo'
import { Box } from '@mui/material'
import { Container } from './components/Container/Container'

import { TasksContext, TasksDispatchContext } from './components/Context/Context'
import './App.css'
import { useReducer } from 'react'
import { TaskList, taskReducer } from './components/TaskList/TaskList'
import { InputForm } from './components/InputForm/InputForm'

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <Container>
          <Box sx={{ display: 'flex' }}>
            <Logo ></Logo>
          </Box>
          <InputForm />
          <TaskList />

        </Container>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>

  )
}

export default App
