import { useDispatch, useSelector } from 'react-redux'
import { Head } from './components/head/head'
import { AppDispatch, RootState } from './store/store'
import {
  Checkbox,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Task } from './components/task/task'
import { Pagination } from './components/pagination/Pagination'
import { Tab } from './components/tab/Tab'
import { useAppDispatch } from './hooks/redux'
import { fetchGetTasks } from './store/actions/asyncThunk'
import { useEffect } from 'react'


const Render = () => {

  const dispatch = useAppDispatch()
  useEffect(()=>{dispatch(fetchGetTasks())},[])

  const someState = useSelector((state: RootState) => state.todo)
  let arrayCurrentTask;
  const endIndex = someState.currentPage * 5;
  const startIndex = endIndex - 5;
  switch (someState.currentTab){
    case 'All':
      arrayCurrentTask = someState.tasks.slice(startIndex,endIndex)
      break;
    case 'Active':
      const arrayActiveTask = someState.tasks.filter((task)=>!task.checked)
      arrayCurrentTask = arrayActiveTask.slice(startIndex,endIndex)
      break;
    case 'Complete':
      const arrayCompleteTask = someState.tasks.filter((task)=>task.checked)
      arrayCurrentTask = arrayCompleteTask.slice(startIndex,endIndex)
      break;
  }
  console.log(someState)
  return (
      <><Head />
      <Tab/>
      <div className="tasksList">
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        {someState.loading==='pending'?<CircularProgress />:arrayCurrentTask.map((value) => (
            <Task
              key={value.id}
              id={value.id}
              text={value.text}
              checked={value.checked}
            ></Task>
          ))}
      </List>
    </div>
    <Pagination></Pagination>
    </>
  )
}

export default Render
