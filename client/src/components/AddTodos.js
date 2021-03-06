import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useContext,useEffect, useRef, useState, } from 'react';
import { ADD_TODO, UPDATE_TODO } from '../graphql/Mutation';
import { GET_TODO, GET_TODOS } from '../graphql/Query';
import { TodoContext } from '../TodoContext';


const AddTodos = () => {
    const{selectedId, setSelectedId} = useContext(TodoContext);
    const[updateTodo] = useMutation(UPDATE_TODO)
    const [todo, setTodo] = useState({
        title:'',
        detail:'',
        date:''
    })
    const {loading,error,data} = useQuery(GET_TODO,{
        variables:{id:selectedId},onCompleted:(data)=>{
            console.log(data.getTodo)
            // setTodo(data.getTodo)}
        }
    })
    // console.log('gettodo', data)
    // console.log(selectedId)
    const inputAreaRef = useRef()
    // const [todo, setTodo] = useState({
    //     title:'',
    //     detail:'',
    //     date:''
    // })
    useEffect(()=> {
        console.log(todo)
    },[todo])
    useEffect(() => {
        const checkIfClickedOutside = e=>{
            if(!inputAreaRef.current.contains(e.target)) {
                console.log('Outside input area');
                setSelectedId(0)
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
        // if (todo.title==""){
        //     alert("Please enter title!")
        // }
        e.preventDefault();
        console.log("selectedId: "+selectedId);
        if (selectedId===0) {
            addTodo({
            variables:{
                title:todo.title,
                detail:todo.detail,
                date:todo.date,
            },refetchQueries:[
                { query: GET_TODOS }
            ]
        })
        }else{
            console.log("todo.id: "+todo.id);
            console.log("selectedId: "+selectedId);
             updateTodo({
            variables:{
                // id: todo.id,     Switched to selectedId here and changed to $id:ID on mutation.
                id: selectedId,
                title:todo.title,
                detail:todo.detail,
                date:todo.date
            },refetchQueries:[
                { query: GET_TODOS }
            ]
        })
        }

    }
    return (
        

    <form onSubmit={onSubmit}ref={inputAreaRef} >
        
        <div className="form-group mb-3">
            <label className="bolder">Task Name</label>
            
            <input type="text" className="form-control" placeholder="Enter task name"
            value={todo.title}
            onChange={e => setTodo({ ...todo, title: e.target.value })}
            />
        </div>
        <div className="form-group mb-3">
            <label className="bolder">Task Description</label>
            <input type="text" className="form-control" placeholder="Enter task description"
            value={todo.detail}
            onChange={e => setTodo({ ...todo, detail: e.target.value })}
            />
        </div>
        <div className="form-group mb-3">
            <label className="bolder">Deadline</label>
            <input type="date" className="form-control" placeholder="Deadline"
            value={moment.utc(todo.date).format('yyyy-MM-DD')}
            onChange={e => setTodo({ ...todo, date: e.target.value })}
            />
        </div>
            <button type="submit" className="btn btn-primary buttonColors">{(selectedId===0)?"Add" : "Update"}</button>
        </form>
    )
}


export default AddTodos