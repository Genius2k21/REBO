import { useMutation } from '@apollo/client';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { ADD_TODO } from '../graphql/Mutation';
import { GET_TODOS } from '../graphql/Query';

const AddTodos = () => {
    const inputAreaRef = useRef()
    const [todo, setTodo] = useState({
        title:'',
        detail:'',
        date:''
    })
    useEffect(() => {
        const checkIfClickedOutside = e=>{
            if(!inputAreaRef.current.contains(e.target)) {
                console.log('Outside input area');
            }else{
                console.log('Inside input area');
            }
        }
        document.addEventListener("mousedown",checkIfClickedOutside)
        return () =>{
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [])

    const [addTodo] = useMutation(ADD_TODO)
    const onSubmit = e=>{
        e.preventDefault();
        addTodo({
            variables:{
                title:todo.title,
                detail:todo.detail,
                date:todo.date,
            },refetchQueries:[
                { query: GET_TODOS }
            ]
        })
    }
    return (
    <form onSubmit={onSubmit}ref={inputAreaRef} >
        <div className="form-group mb-3">
            <label>Title</label>
            
            <input type="text" className="form-control" placeholder="Enter title"
            value={todo.title}
            onChange={e => setTodo({ ...todo, title: e.target.value })}
            />
        </div>
        <div className="form-group mb-3">
            <label>Detail</label>
            <input type="text" className="form-control" placeholder="Enter Detail"
            value={todo.detail}
            onChange={e => setTodo({ ...todo, detail: e.target.value })}
            />
        </div>
        <div className="form-group mb-3">
            <label >Date</label>
            <input type="date" className="form-control" placeholder="Password"
            value={moment(todo.date).format('yyyy-MM-DD')}
            onChange={e => setTodo({ ...todo, date: e.target.value })}
            />
        </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddTodos