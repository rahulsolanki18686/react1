import React, {Component} from 'react'

import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false

        }

        // this.handleUserNameChange = this.handleUserNameChange.bind(this)
        // this.handlePasswordNameChange = this.handlePasswordNameChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event){

        console.log(event.target.name);

        this.setState(
            {
                [event.target.name]:event.target.value
            })
            
            ;
    }

    // handleUserNameChange(event){

    //     console.log(event.target.value);

    //     this.setState({username:event.target.value});
    // }

    // handlePasswordNameChange(event){

    //     console.log(event.target.value);

    //     this.setState({password:event.target.value});
    // }

    loginClicked(){
        //in28minutes dummy
        if(this.state.username === 'in28minutes' && this.state.password === 'dummy'){
            // console.log('success')
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)

            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else
        {
            // console.log('failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
        

        //console.log(this.state)
    }

    render(){

        return(
            <div>
                <h1>Login</h1>
                <div className="container">
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Login Successfull</div>}
           {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
            
           User Name: <input type="text" name="Username" value={this.state.username} onChange={this.handleChange}/>
           Password:  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
           <button className="btn btn-success"onClick={this.loginClicked}>Login</button>
           </div>
           </div>
        );
    }


}

export default LoginComponent