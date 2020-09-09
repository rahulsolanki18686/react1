import axios from "axios"
class ToDoDataService{


retrieveAllToDos(name){


    return axios.get(`http://localhost:8080/users/${name}/todos`)
}

deleteToDO(name,id){


    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
}


}

export default new ToDoDataService()