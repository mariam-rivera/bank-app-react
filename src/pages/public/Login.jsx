import { useEffect } from 'react';
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

export const Login = () => {
    const navigate = useNavigate();
    const setLogin = useLoginStore(setGlobalLogin);
    
    useEffect(() => {
      clearSessionStorage();
      navigate(`/${PUBLIC_ROUTES.login}`, {replace: true})
    }, []);

    const handleInitSession = () => {
    const objSession = {
        okay: true,
        message: 'logged'
    }
    setItemSessionStorage(KEY_INIT_SESSION_SESSION_STORAGE, objSession);
    setLogin(objSession);
    navigate(`/${PRIVATE_ROUTES.private}`, {replace: true})
  } 

  return (
   <div className={`${styles.container} sm:flex-row sm:px-10 sm:py-10 sm:h-screen`}>
   <div className={`${styles.about} sm:w-2/3 sm:pr-[180px]`}>
    <img src={welcomeImg} className={`${styles.welcomeImg} sm:w-[650px]`}/>
    <h1 className={`${styles.titleWelcome} sm:text-5xl`}>Welcome to AppBank!</h1>
    <p className={`${styles.aboutDescription} sm:text-md  sm:mt-6`}>Elit cillum fugiat mollit ad tempor voluptate laboris amet consequat. Duis exercitation sunt officia est culpa. Deserunt laboris eiusmod esse ea nisi id.</p>
   </div>
   {/* form */}
    <div className={`${styles.login} sm:w-1/3 sm:bg-indigo-900`}>
      <img src={loginImg} className={styles.image}/>
      <h1 className={styles.titleLogin}>Log In</h1>
      <div className={`${styles.item}`}>
        <label className={styles.labelField}>Card number</label>
        <Input title="Card number" type="number"/>
      </div>
      <div className={styles.item}>
        <label className={styles.labelField}>Password</label>
        <Input title="Password" type="password"/>
      </div>
      <Button title="Login" handleInitSession={handleInitSession}/>
      <label className={styles.forgotPassword}>Forgot password?</label>
      <label className={`${styles.register} sm:mt-2`}>Register</label>
    </div>
   </div>
  )
}
