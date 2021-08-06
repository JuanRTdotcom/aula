import { useContext } from 'react'
import UserContext from '../contextos/userContext'

export default function UseSignInUser(){
    
    const {jwt,setjwt} = useContext(UserContext)

    return{
        
    }
}