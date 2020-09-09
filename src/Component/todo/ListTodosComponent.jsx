import React, {Component} from 'react'
import TodoDataService from '../../api/todo/ToDoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component{

    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {

            todos: [
                    // {id: 1, description: 'Learn React1', done: false, targetDate: new Date()},
                    // {id: 2, description: 'Learn React2', done: false, targetDate: new Date()},
                    // {id: 3, description: 'Learn React3', done: false, targetDate: new Date()}
        
        
                    ],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)

    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true

    }

    componentDidMount(){
        console.log('componentDidMount')
        this.refreshTodos();
      

    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllToDos(username)
        .then( response => {

            //console.log(response)

            this.setState({

                todos : response.data

            })

        })

    }

    updateTodoClicked(id){
            console.log('update to do clicked'+id)
            this.props.history.push(`/todos/${id}`)

            // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()

        // console.log(id +""+username)
      
        // TodoDataService.deleteToDO(username,id)
        // .then(
            
        //     response => {

        //         this.setState(
        //             {
        //                 message: `delete of to do ${id}`
                        
        //             }
        //         )
        //         this.refreshTodos();

        //     }
        // )

    }

    deleteTodoClicked(id){

        let username = AuthenticationService.getLoggedInUserName()

        console.log(id +""+username)
      
        TodoDataService.deleteToDO(username,id)
        .then(
            
            response => {

                this.setState(
                    {
                        message: `delete of to do ${id}`
                        
                    }
                )
                this.refreshTodos();

            }
        )

    }

    render(){
        console.log('render')
        return <div>
                    <h1>List Todos</h1>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>description</th>
                                
                                <th>is Complete?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (

                                    todo => 
                                    <tr key={todo.id}>
                                    
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button  className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button> </td>
                                    <td><button  className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button> </td>
                                </tr>

                                )

                            }

                           

                        </tbody>

                    </table>
                    </div>
            
            </div>

    }

}

export default ListTodosComponent