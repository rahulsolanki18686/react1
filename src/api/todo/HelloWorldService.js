import axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){

       return axios.get('http://ws.informaticsolutions.in/hello-world')
        //console.log('execute servicw')
    }

    executeHelloWorldBeanService(){

        return axios.get('http://ws.informaticsolutions.in/hello-world-bean')
         //console.log('execute servicw')
     }

     executeHelloWorldPathVariableService(name){

        return axios.get(`http://ws.informaticsolutions.in/hello-world/path-variable/${name}`)
         //console.log('execute servicw')
     }

}

export default new HelloWorldService()