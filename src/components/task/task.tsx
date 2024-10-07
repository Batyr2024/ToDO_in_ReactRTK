import { ListItem, Checkbox, ListItemText, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Task as ITask } from "../../interfaces/Task";

export const Task = (props:ITask) => {
  return (
    <ListItem key={props.id}>
      <Checkbox checked={props.checked}></Checkbox>
      <ListItemText primary={props.text} />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}
