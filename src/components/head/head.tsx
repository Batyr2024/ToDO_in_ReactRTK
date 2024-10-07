import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchAddTasks } from '../../store/actions/asyncThunk'
import './head.css'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export const Head = () => {
  const dispatch = useAppDispatch()
  const [textState, setTextState] = useState('')
  const buttonAddClick = () => {
    if (textState === '') return
    const taskText = textState
    dispatch(fetchAddTasks({ body: taskText }))
    setTextState('')
  }
  return (
    <>
      <div className="head_1">
        <textarea
          id="textArea"
          value={textState}
          onChange={(event) => {
            setTextState(event.target.value)
          }}
          maxLength={100}
        ></textarea>
        <Button variant="contained" onClick={buttonAddClick}>
          ADD
        </Button>
      </div>
      <div className="head_2">
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="ALL Check" />
        </FormGroup>
        <Button variant="contained">DELETE</Button>
      </div>
    </>
  )
}
