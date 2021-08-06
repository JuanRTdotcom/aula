import SignIn from './Signin/signin';
import SignUp from './Signup/singup';
import ForgotPassword from './ForgotPassword/forgotPassword'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../contextos/userContext';

export default function EstateModal({estado}){

    const miContexto = useContext(Context)
  
    // const [estadoLogin,setEstadoLogin] = useState(miContexto);
  const [state,setState] = useState(miContexto);
   
    useEffect(() => {
        console.log('useEffect')
    },[setState])

    switch(estado){
        case 1: return <SignIn />
        case 2: return <SignUp />
        case 3: return <ForgotPassword />
        default: return <SignIn />
    }
    
}