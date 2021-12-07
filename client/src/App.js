import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import {GET_TODOS} from './graphql/Query'
import { useQuery } from '@apollo/client';
// import moment from 'moment';
import AddTodos from './components/AddTodos';
import Todo from './components/Todo';
import Title from './components/Title';
import Calculator from './components/Calculator/Calculator';
import {TodoContext} from './TodoContext';
import { useState } from 'react';
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from './utils/auth';
import Contact from "./components/Contact/contact";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


function App() {
    
    const [selectedId, setSelectedId] = useState(0)
      const {loading, error, data} = useQuery(GET_TODOS,{
        fetchPolicy:'network-only',
        nextFetchPolicy:'network-only'
    });
    if(loading) return <p>loading...</p>

    console.log(data)
    
    

return (
<Router>
    <Navbar/>
    <main>
    <TodoContext.Provider value ={{selectedId,setSelectedId}}>
           {error ?   <Login/> : (
         <Switch>
            <Route path="/Tasks" exact>
            <div className="container py-5">
           <div className="row text-center alignText">
               
             
               <div className="col-lg-5 col-xs-12">
                    <h1 className="about titleHeader">
                       Rebuild Project
                    </h1>
               </div>
               
            </div>
        </div>
<div className="container todobox">
     <AddTodos/></div>
    <div className="container todobox"><h2><center>Current Tasks</center></h2>
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
     </Route>
     <Route path="/Login" exact>
      <Login/>
    </Route>
    <Route path="/contact" exact>
      <Contact/>
    </Route>
    <Route path="/Signup" exact>
      <Signup/>
    </Route>
    <Route path="/Calculator" exact>
        <Calculator />
        </Route>
        {/* <Redirect to="/Login" />  */}
        </Switch>
        )}
    </TodoContext.Provider>
    </main>
    </Router>
    );
}
export default App; 
