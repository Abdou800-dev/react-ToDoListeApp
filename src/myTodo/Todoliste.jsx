import { useState } from "react"
import './Todoliste.css'
const Todoliste = () => {
    const [tasks, setTasks] = useState([])
    const [newtask, setNewTask] = useState("")
    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    
    const moveUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], [updatedTasks[index - 1]]] =
            [updatedTasks[index - 1], [updatedTasks[index]]];
            setTasks(updatedTasks)
        }
        
    }
    const moveDown = (index) => {
        if (index <tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], [updatedTasks[index +1]]] =
            [updatedTasks[index + 1], [updatedTasks[index]]];
            setTasks(updatedTasks)
        }
    }
    const addTask = () => {
        if (newtask.trim() !== "") {
         setTasks(t => [...t, newtask])
        setNewTask("")    
        } else {
            alert("the prompte is empty")
         }
        
    }
    const deleteTask= (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
  



    return (
        <div className="to-do-list">
            <h1>To Do List Application</h1>
            
            <div>
            <input type="text" placeholder="enter a task " value={newtask} onChange={handleInputChange} />
                <button
                    className="add-button"
                onClick={addTask}>Add
                </button>
            </div>
            <ol>
                {tasks.map((task ,index) =>
                (
                    <li key={index}>
                        <span className="text">{task}</span>  
                        <button
                            className="delete-btn"
                            onClick={()=>deleteTask(index)}>
                            delete
                        </button>
                        <button
                            className="move-btn"
                            onClick={()=>moveUp(index)}>
                                   👆
                        </button>
                        <button className="move-btn"
                           onClick={()=>moveDown(index)} > 
                                    👇
                        </button>
                        
                    </li>
                ))}
            </ol>
           
            
        </div>
    )
}
export default Todoliste