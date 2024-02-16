import { useState } from "react";
import React from 'react'

function AddTodolist() {
 
    const [addTodo, setAddTodo] = useState('')

    console.log(addTodo);

    return (
        <>
            <form>
                <div className="card card-body">
                    <div className="form-group justify-content-center  d-flex ">
                        <label className="mt-1 me-2 fw-bold" htmlFor="">Ajouter</label>
                        <input type="text" className="from-control" value={addTodo}  onChange={(e) => setAddTodo(e.target.value)} />
                        <input type="submit" className="btn btn-success ms-2 " />
                    </div>
                </div>
            </form>

        </>
    )
}

export default AddTodolist