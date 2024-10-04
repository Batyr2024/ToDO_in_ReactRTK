import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchAddTasks } from '../../store/actions/asyncThunk'
import './head.css'

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
        <button id="buttonAdd" onClick={buttonAddClick}>
          ADD
        </button>
      </div>
      <div className="head_2">
        <div className="head_2__input">
          <input type="checkbox" id="checkboxAll" />
          <p>CHECK ALL</p>
        </div>
        <button id="buttonDeleteAll">DELETE</button>
      </div>
    </>
  )
}
