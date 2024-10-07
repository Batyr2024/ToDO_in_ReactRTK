import { Tabs, Tab as TabComp } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import tasksSlice from '../../store/reducers/reducer'
import './Tab.css'

export const Tab = () => {
  const someState = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  return (
    <div className='tab'>
      <Tabs
        onChange={(_event,value)=>{dispatch(tasksSlice.actions.changeCurrentTab(value))}}
        value={someState.currentTab}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {someState.maxAllTab!==0? <TabComp value="All" label="All Tasks" />:<TabComp value="All" label="All Tasks" disabled/>}
        {someState.maxActiveTab!==0? <TabComp value="Active" label="Active Tasks" />:<TabComp value="Active" label="Active Tasks" disabled/>}
        {someState.maxCompleteTab!==0? <TabComp value="Complete" label="Complete Tasks" />:<TabComp value="Complete" label="Complete Tasks" disabled/>}

      </Tabs>
    </div>
  )
}
