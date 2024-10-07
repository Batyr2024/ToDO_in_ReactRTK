import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import tasksSlice from '../../store/reducers/reducer'
import { Pagination as UIPagination } from '@mui/material'
import './Pagination.css'

export const Pagination = () => {
  const someState = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  let pages
  switch (someState.currentTab) {
    case 'All':
      pages = Math.ceil(someState.maxAllTab / 5)
      break
    case 'Active':
      pages = Math.ceil(someState.maxActiveTab / 5)
      break
    case 'Complete':
      pages = Math.ceil(someState.maxCompleteTab / 5)
      break
    default:
      break
  }
  //dispatch(tasksSlice.actions.changeCurrentPage(1))

  return (
    <div className="pagination">
      <UIPagination
        count={pages}
        color="primary"
        onChange={(_event, page) => {
          dispatch(tasksSlice.actions.changeCurrentPage(page))
        }}
      />
    </div>
  )
}
