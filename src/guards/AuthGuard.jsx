import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_ROUTES } from '.././constants/routes/routes-constants';
import { useLoginStore, getGlobalLogin } from '.././stores/login-store';

const AuthGuard = () => {
  const sessionStore = useLoginStore(getGlobalLogin);
  return (
    <>
      {sessionStore.message ? (
        <Outlet />
      ) : (
        <Navigate replace to={PUBLIC_ROUTES.LOGIN} />
      )}
    </>
  );
};
export default AuthGuard;
