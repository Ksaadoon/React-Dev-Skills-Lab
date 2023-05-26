import ToDoListItem from "./ToDoListItem"
import './ToDoList.css'

export default function ToDoList(props){
    return (
        <>
        <h1>To Do list</h1>
        <ul className="ToDoList">
            {props.todos.map((toDo, idx) => {
                return <ToDoListItem toDo={toDo} key={idx} index={idx}/>
                })
            }
        </ul>
        </>
    )
}
