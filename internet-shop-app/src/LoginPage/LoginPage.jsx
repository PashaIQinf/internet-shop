import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setUser} from '../slices/userSlice'
import {setUserPass} from '../slices/userPass'
import { getAuth, signInWithEmailAndPassword ,updatePassword} from "firebase/auth";
import FormPage from '../FormPage/FormPage'
import { useNavigate  } from 'react-router-dom'
import { collection,getDocs} from "firebase/firestore";
import {firestore} from "../firebase";
import {selectUid} from '../slices/userSlice'
import {setBasket} from '../slices/BasketSlice'
import {useAuth} from '../hooks/use-auth'
import {setOrder} from '../slices/OrderSlice'
export default  function LoginPage() {
  const dispath = useDispatch();
  let navigate = useNavigate();
  const [array,setArray] = useState()
  const [ErrorLogin,setErrorLogin] = useState("");
  const [ErrorPass,setErrorPass] = useState("");
  const handleLogin = (email,password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
                .then(async ({user}) => {
                  dispath(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                  } ));

                  const snapshot = await getBasket(user.uid) 
                  dispath(setBasket({basket:snapshot}));
                  dispath(setOrder({orders:await getOrder(user.uid) }))
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
                    setErrorPass(<a>Неверный пароль или  <a style={{color: '#3366BB',
                      textDecoration: "underline"}}  onClick={() => { updatePassword(auth.currentUser,password).then(() => {
                  }).catch((error) => {
                  });}}>измени пароль</a></a>);
                    setErrorLogin("");
                    
                  }
                }) , dispath(setUserPass({password: password,} )) 
                
               
  }
  return (
    <FormPage title="Вход" handleClick = {handleLogin} ErrLogin={ErrorLogin} ErrPassword={ErrorPass}/>
  )
}
async function getBasket(uid) { 
  const snapshot = await getDocs(collection(firestore,"UserBasket",uid,"Basket"));
  return  snapshot.docs.map(doc => doc.data());
}
async function getOrder(uid) { 
  const snapshot = await getDocs(collection(firestore,"UserBasket",uid,"Order"));
  return  snapshot.docs.map(doc => doc.data());
}
