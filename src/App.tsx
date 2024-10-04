import { useDispatch, useSelector } from 'react-redux'
import { Head } from './components/head/head'
import { AppDispatch, RootState } from './store/store'

interface PropsApp {
  Storage: RootState
}

const App = () => {
  const someState = useSelector((state: RootState) => state.todo)
  console.log(someState)
  return (
    <>
      <Head />
      <ul>
        {someState.tasks !== undefined
          ? someState.tasks.map((task) => <li key={task.id}>{task.text}</li>)
          : null}
      </ul>
    </>
  )
}

export default App
