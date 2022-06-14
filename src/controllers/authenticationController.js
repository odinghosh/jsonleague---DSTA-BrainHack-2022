import * as authenticationDAO from  '../models/authenticationDAO' 


export async function login(username, password){
    return await authenticationDAO.login(username, password)
}

export async function register(username, password){
    return await authenticationDAO.register(username, password)
}
 