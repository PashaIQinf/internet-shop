import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setUser} from '../slices/userSlice'
import { setUserPass } from '../slices/userPass';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import RegFormPage from '../RegFormPage/RegFormPage'
import { useNavigate  } from 'react-router-dom'
export default function RegisterPage() {
  const dispath = useDispatch();
  let navigate = useNavigate();
  const [isErrPass,setIsErrPass] = useState(false);
  const [ErrorLogin,setErrorLogin] = useState("");
  const [ErrorPass,setErrorPass] = useState("");
  const handleRegister = (email,password,repassword) => {
    const auth = getAuth();
    (password == repassword) ? (createUserWithEmailAndPassword(auth,email,password) 
                .then( (({user}) => {
                  dispath(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                  }));
                  setIsErrPass(false)
                  navigate('/');
                }))
                .catch(function(error) {
                  var errorCode = error.code;
                  console.log(errorCode)
                  if (errorCode == 'auth/invalid-email') {
                    setErrorLogin("Неверный email!!");
                    setErrorPass("");
                  }
                  if (errorCode == 'auth/email-already-in-use') {
                    setErrorLogin("Email уже используеться!!");
                    setErrorPass("");
                  }
                  if (errorCode == 'auth/weak-password') {
                    setErrorPass("Слишком маленький пароль!!");
                    setErrorLogin("");
                  }
              }, setIsErrPass(false), ), dispath(setUserPass({password: password,} )) 
              ) : (setErrorLogin(""), setErrorPass("") , setIsErrPass(true));
              
  }
  return isErrPass ?
  (<RegFormPage title="Регистрация" handleClick={handleRegister} errPass='Пароли не совпадают!!' ErrLogin={ErrorLogin} ErrPassword={ErrorPass}/> )
  : 
  ( <RegFormPage title="Регистрация" handleClick={handleRegister} errPass='' ErrLogin={ErrorLogin} ErrPassword={ErrorPass}/> )
}
