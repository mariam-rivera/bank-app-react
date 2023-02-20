import { Route, Navigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../constants/routes/routes-constants';
import RouteNotFound from '../../routes/route-not-found';
import { About } from './about';
import { Dashboard } from './dashboard';
import { ProductDetail } from './product-detail';

export const PrivateRoutes = () => {
  return (
    <>
      <RouteNotFound>
        <Route path="/" element={<Navigate to={PRIVATE_ROUTES.dashboard} />} />
        <Route path={PRIVATE_ROUTES.dashboard} element={<Dashboard />} />
        <Route path={PRIVATE_ROUTES.about} element={<About />} />
        <Route
          path={`${PRIVATE_ROUTES.productDetail}${PRIVATE_ROUTES.slug}`}
          element={<ProductDetail />}
        />
      </RouteNotFound>
    </>
  );
};
