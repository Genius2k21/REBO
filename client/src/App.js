import './App.css';
import {GET_TODOS} from './graphql/Query'
import { useQuery } from '@apollo/client';
// import moment from 'moment';
import AddTodos from './components/AddTodos';
import Todo from './components/Todo';

function App() {
    const {loading, error, data} = useQuery(GET_TODOS);
    if(loading) return <p>loading...</p>
    if (error) return <p>{error.message}</p>
    console.log(data)
return (
<div className="container todobox">
    <AddTodos/>
    <div className="list-group mt-4">
        {data?.getTodos.map(todo=>(
           <Todo 
           key={todo.id}
           id={todo.id}
           title={todo.title}
           detail={todo.detail}
           date={todo.date}
           />
        ))}

          
        </div>
    </div>
    );
}
export default App;