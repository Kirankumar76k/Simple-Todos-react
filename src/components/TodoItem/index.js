// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteItem} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
