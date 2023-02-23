import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setItemSessionStorage, clearSessionStorage } from '../../utils/session-storage/session-storage';
import { useLoginStore, setGlobalLogin } from "../../stores/login-store";
import { KEY_INIT_SESSION_SESSION_STORAGE } from '../../constants/session-storage/session-storage';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../../constants/routes/routes-constants";
import loginImg from "../../assets/bank-images/login.png";
import welcomeImg from "../../assets/bank-images/home-one.png";
import * as styles from './styles';
import { Input } from '../../atoms/input/Input';
import { Button } from '../../atoms/button/Button';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from '../../atoms/alert/Alert';
import { handleErrorCodes } from '../../adapters/alert/alert-adapter';

export const Login = () => {
    const navigate = useNavigate();
    const setLogin = useLoginStore(setGlobalLogin);
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
 
    useEffect(() => {
      clearSessionStorage();
      navigate(`/${PUBLIC_ROUTES.login}`, {replace: true})
    }, []);

    const handleInitSession = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          const objSession = {
            okay: true,
            message: 'logged'
        }
        setItemSessionStorage(KEY_INIT_SESSION_SESSION_STORAGE, objSession);
        setLogin(objSession);
        navigate(`/${PRIVATE_ROUTES.private}`, {replace: true})
        })
        .catch(err => {
          const errorMessage = handleErrorCodes(err);
          setErrorMsg(errorMessage);
          setError(true);
        })
    }
    
  return (
   <div className={`${styles.container} sm:flex-row sm:justify-center sm:items-center sm:px-10 sm:py-10 sm:h-screen`}>
   <div className={`${styles.about} sm:w-2/3 sm:pr-[180px]`}>
    <img src={welcomeImg} className={`${styles.welcomeImg} sm:w-[650px]`}/>
    <h1 className={`${styles.titleWelcome} sm:text-5xl sm:text-slate-500`}>Welcome to the bank of the future!</h1>
    <p className={`${styles.aboutDescription} sm:text-md  sm:mt-6`}>Elit cillum fugiat mollit ad tempor voluptate laboris amet consequat. Duis exercitation sunt officia est culpa.</p>
   </div>
    <div className={`${styles.login} sm:w-1/3 sm:p-10 sm:h-full sm:justify-center sm:items-center sm:bg-slate-800`}>
      <img src={loginImg} className={`${styles.image} sm:hidden`}/>
      <h1 className={`${styles.titleLogin} sm:text-3xl sm:mb-5`}>Log In</h1>
      <div className={`${styles.item}`}>
        <label className={styles.labelField}>Email</label>
        <Input title="Email" type="text" onChange={(event) => setEmail(event.target.value)}/>
        { error  && <Alert message={errorMsg}/> }
      </div>
      <div className={styles.item}>
        <label className={styles.labelField}>Password</label>
        <Input title="Password" type="password" onChange={(event) => setPassword(event.target.value)}/>
        { error  && <Alert message={errorMsg}/> }
      </div>
      <Button title="Login" onClick={handleInitSession}/>
      <span className={styles.forgotPassword}>Forgot password?</span>
      <span className={`${styles.register} sm:mt-2`}>Register</span>
    </div>
   </div>
  )
}
