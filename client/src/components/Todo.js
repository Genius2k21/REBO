import React, { useContext } from 'react';
import moment from 'moment';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../graphql/Mutation';
import { GET_TODOS } from '../graphql/Query';
import {TodoContext} from '../TodoContext';

const Todo = ({ id,title,date,detail }) => {
    const { selectedId, setSelectedId} =useContext(TodoContext);
    const [deleteTodo] = useMutation(DELETE_TODO)
    const removeTodo = (id)=>{
        deleteTodo({
            variables:{
                id:id
            },refetchQueries:[
                {query: GET_TODOS}
            ]
        })
    }

    return (
         <a href="#" onClick={()=>setSelectedId(id)}
         className="list-group-item list-group-item-action flex-column align-items-start ">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{title}</h5>
            <small>{moment.utc(date).format("MMMM DD YYYY")}</small>
        </div>
    <p className="mb-1">{detail} </p>
        <small onClick={()=> removeTodo(id)}
        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg></small>

            </a>

    )
}

export default Todo