import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {setUser} from '../slices/userSlice'
import {setUserPass} from '../slices/userPass'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormPage from '../FormPage/FormPage'
import { useNavigate  } from 'react-router-dom'
export default function LoginPage() {
  const dispath = useDispatch();
  let navigate = useNavigate();

  const [ErrorLogin,setErrorLogin] = useState("");
  const [ErrorPass,setErrorPass] = useState("");
  const handleLogin = (email,password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
                .then(({user}) => {
                  dispath(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                  } ));
                  navigate('/');
                })
                .catch(function(error) {
                  var errorCode = error.code;
                  console.log(errorCode)
                  if (errorCode == 'auth/invalid-email') {
                    setErrorLogin("Неверный email!!");
                    setErrorPass("");
                  }
                  if (errorCode == 'auth/invalid-credential') {
                    setErrorPass(<a>Неверный пароль или нужно <a className ="Error-auth" href='register'>зарегестрироваться</a></a>);
                    setErrorLogin("");
                    
                  }
                }) , dispath(setUserPass({password: password,} ));
  }
  return (
    <FormPage title="Вход" handleClick = {handleLogin} ErrLogin={ErrorLogin} ErrPassword={ErrorPass}/>
  )
}
