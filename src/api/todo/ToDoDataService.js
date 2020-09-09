import axios from "axios"
class ToDoDataService{


retrieveAllToDos(name){


    return axios.get(`http://firstspringapp-env.eba-2yatcdy8.ap-south-1.elasticbeanstalk.com/users/${name}/todos`)
}

deleteToDO(name,id){


    return axios.delete(`http://firstspringapp-env.eba-2yatcdy8.ap-south-1.elasticbeanstalk.com/users/${name}/todos/${id}`)
}


}

export default new ToDoDataService()