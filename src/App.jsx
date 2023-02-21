import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import RouteNotFound from './routes/route-not-found';
import {
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
} from './constants/routes/routes-constants';
import { Login } from './pages/public/Login';
import AuthGuard from './guards/AuthGuard';
import { PrivateRoutes } from './pages/private';

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteNotFound>
          <Route path="/" element={<Navigate to={PRIVATE_ROUTES.private} />} />
          <Route path={PUBLIC_ROUTES.login} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route
              path={`${PRIVATE_ROUTES.private}/*`}
              element={<PrivateRoutes />}
            />
          </Route>
        </RouteNotFound>
      </BrowserRouter>
    </>
  );
}

export default App;
