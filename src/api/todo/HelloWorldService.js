import axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){

       return axios.get('http://firstspringapp-env.eba-2yatcdy8.ap-south-1.elasticbeanstalk.com/hello-world')
        //console.log('execute servicw')
    }

    executeHelloWorldBeanService(){

        return axios.get('http://firstspringapp-env.eba-2yatcdy8.ap-south-1.elasticbeanstalk.com/hello-world-bean')
         //console.log('execute servicw')
     }

     executeHelloWorldPathVariableService(name){

        return axios.get(`http://firstspringapp-env.eba-2yatcdy8.ap-south-1.elasticbeanstalk.com/hello-world/path-variable/${name}`)
         //console.log('execute servicw')
     }

}

export default new HelloWorldService()