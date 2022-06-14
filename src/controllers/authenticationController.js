import * as authenticationDAO from  '../models/authenticationDAO' 
import * as firestoreDAO from '../models/firestoreDAO'


export async function login(username, password){
    const user = await authenticationDAO.login(username, password)
    console.log(user)
    return user
}

export async function register(username, password){
    const user = await authenticationDAO.register(username, password)
    await firestoreDAO.addNewUser(user)
    return user
}

