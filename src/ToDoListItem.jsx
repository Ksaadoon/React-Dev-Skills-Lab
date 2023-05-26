import './ToDoListItem.css'

export default function ToDoListItem({toDo, index}){
    return(
        <>
        <li style={ { backgroundColor: index % 2 === 0 ? 'lavender': 'plum' } }className="ToDoListItem">
            <div className="flex-ctr-ctr">
                {index + 1}
            </div>
            <p><span>{toDo.owner}</span> has to {toDo.description}</p>
        </li>
        </>
    )
}