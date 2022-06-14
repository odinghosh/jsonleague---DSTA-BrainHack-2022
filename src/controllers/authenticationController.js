import * as authenticationDAO from  '../models/authenticationDAO' 
import * as firestoreDAO from '../models/firestoreDAO'


export async function login(username, password){
    return await authenticationDAO.login(username, password)
}

export async function register(username, password){
    var generatedUID =  await authenticationDAO.register(username, password)
    firestoreDAO.addNewUser(generatedUID)
    return generatedUID
}
 