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
import StickyShareButtons from 'sharethis-reactjs';
import AddTodos from './components/AddTodos';
import Todo from './components/Todo';
import Title from './components/Title';
import Calculator from './components/Calculator';
import {TodoContext} from './TodoContext';
import { useState } from 'react';
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from './utils/auth';
import Contact from "./components/Contact/contact";
<<<<<<< HEAD
=======

>>>>>>> d1e063057d949200ec4f87a4c22e31ce4e3cd609
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
    <StickyShareButtons
          config={{
            alignment: 'left',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            hide_desktop: false,  // hide buttons on desktop (true, false)
            labels: 'counts',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'linkedin',
              'facebook',
              'twitter',
              'pinterest',
              'email'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page

            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)

          }}
        />
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
