class AuthenticationService{

    registerSuccessfullLogin(username,password){
        console.log('registerlogin')
        sessionStorage.setItem('authenticatedUser',username)
    }

    logout(){

        sessionStorage.removeItem('authenticatedUser')

    }

    isUserLoggedIn(){

        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true


    }

    getLoggedInUserName(){

        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user


    }


}

export default new AuthenticationService()