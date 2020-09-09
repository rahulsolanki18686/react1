import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfullResponse= this.handleSuccessfullResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state ={
            welcomeMessage : ''

        }
    }

    render(){

        return(
            <>
            <h1>Welcome!</h1>
            <div className="containere">

                     Welcome{this.props.match.params.name}. You can manage Todos <Link to="/todos">here</Link>
            </div>

            <div className="containere">
                    click here get customized message
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Welcome message</button>
                
            </div>

            <div className="containere">
                    {this.state.welcomeMessage}
            </div>

            </>

        )

    }

    retrieveWelcomeMessage(){

        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfullResponse(response))

        //console.log('retrieve clicked');

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfullResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfullResponse(response))
        .catch(error => this.handleError(error))

    }
    handleSuccessfullResponse(response){
        console.log(response)
        this.setState({

            welcomeMessage:response.data.message
        })
    }

    handleError(error){

        console.log(error.response)

        this.setState({

            welcomeMessage:error.response.data.message
        })
    }


}

export default WelcomeComponent