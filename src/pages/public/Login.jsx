import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setItemSessionStorage, clearSessionStorage } from '../../utils/session-storage/session-storage';
import { useLoginStore, setGlobalLogin } from "../../stores/login-store";
import { KEY_INIT_SESSION_SESSION_STORAGE } from '../../constants/session-storage/session-storage';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../../constants/routes/routes-constants";
export const Login = () => {
    const navigate = useNavigate();
    const setLogin = useLoginStore(setGlobalLogin);
    
    // useEffect(() => {
    //   clearSessionStorage();
    //   navigate(`/${PUBLIC_ROUTES.login}`, {replace: true})
    // }, []);

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
    <div>
        <button onClick={handleInitSession}>login</button>
    </div>
  )
}
