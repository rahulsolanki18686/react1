import axios from "axios"
class ToDoDataService{


retrieveAllToDos(name){


    return axios.get(`http://ws.informaticsolutions.in/users/${name}/todos`)
}

deleteToDO(name,id){


    return axios.delete(`http://ws.informaticsolutions.in/users/${name}/todos/${id}`)
}


}

export default new ToDoDataService()