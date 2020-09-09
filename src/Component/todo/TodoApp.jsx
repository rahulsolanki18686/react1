import React, {Component} from  'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import AuthenticateRoute from './AuthenticatedRoute.jsx'

import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'

import ErrorComponent from './ErrorComponent.jsx'

import WelcomeComponent from './WelcomeComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
class TodoApp extends Component {

    render(){
        return (
          <div className="TodoApp">
             
            <Router>
            <>
            <HeaderComponent/>
            <Switch>
            <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <AuthenticateRoute path="/welcome/:name" component={WelcomeComponent}/>
                <AuthenticateRoute path="/todos/:id" component={TodoComponent}/>
                <AuthenticateRoute path="/todos" component={ListTodosComponent}/>
                <AuthenticateRoute path="/logout" component={LogoutComponent}/>
                
                <Route  component={ErrorComponent}/>
                </Switch>
                <FooterComponent/>
                </>
           
            </Router>
           

            {/*<LoginComponent/>
            <WelcomeComponent/>*/}
            
         
        </div>
        );
        
      
      }


    }

    
   
    
    
    
    


  

    

    // function ShowInvalidCredentials(props){

    //     if(props.hasLoginFailed){

    //         return <div>Invalid Credentials</div>
    //     }

            
    //     return null
    // }

    // function ShowLoginSuccessMessage(props){

    //     if(props.showSuccessMessage){

    //         return <div>Login Successfull</div>
    //     }

            
    //     return null

    // }

export default TodoApp