import { BorderAll, ClearAll, Margin, Padding } from "@mui/icons-material"
import "../styles/todo.css"
import { useState } from "react"

function Todo() {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([
        {
            value: "Buy a new gaming laptop",
            disabled: true
        },
        {
            value: "Buy ChatGPT premium",
            disabled: true
        },
        {
            value: "Go to Lahore",
            disabled: true
        },
        {
            value: "Buy 125 latest model",
            disabled: true
        },
    ])
    const addtodo = () => {
        const oldtodos = [...todos, { value, disabled: true }]
        setTodos(oldtodos)
        setValue("")

    }

    const deleteTodos = (i) => {
        const oldtodos = [...todos]
        oldtodos.splice(i, 1);
        setTodos(oldtodos)
    }


    const editTodos = (i) => {
        const oldtodos = [...todos]
        oldtodos.splice(i, 1, { ...value, disabled: false })
        setTodos(oldtodos)
    }

    const deleteAll = () => {
        setTodos([])
    }



    return (
        <div className="main">
            <div>
                <h2 className="head2">Todo App</h2>
                <input className="maininput" type="text" value={value} placeholder="Add your new todo" onChange={(e) => setValue(e.target.value)} />

                <button onClick={addtodo} className="add"><b>+</b></button>

                <ul style={{ listStyle: "none", Padding: 0 }}>
                    {
                        todos.map((v, i) => {
                            return (
                                <li key={i}>
                                    {/* {value.value} */}

                                    <input className="addinput" type="text" value={v.value} disabled={v.disabled} onChange={(e) => v.value = e.target.value} />
                                    {
                                        v.disabled ? (
                                            <button className="editbutton" onClick={() => editTodos(i)}>✏️</button>
                                        ) : (
                                            <button className="save" onClick={() => {
                                                value.disabled = true
                                                setTodos([...todos])
                                            }}>Save</button>
                                        )
                                    }
                                    <button className="deletebutton" onClick={() => deleteTodos(i)}>❌</button>
                                </li>
                            )
                        })
                    }
                </ul>





                {/* <p className="p1">Buy a new gaming laptop</p>
                    <p className="p2">Complete a previous task</p>
                    <p className="p3">Create a new reposetry</p>
                    <p className="p4">Buy ChatGPT Premium</p> */}


                <div className="footer">
                    <p>You have <b> {todos.length} </b>pending tasks</p>
                    <button className="clear" onClick={deleteAll}>Clear All</button>
                </div>
            </div>
        </div >
    )
}

export default Todo