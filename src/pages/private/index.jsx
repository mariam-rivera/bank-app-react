import { Route, Navigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../constants/routes/routes-constants';
import RouteNotFound from '../../routes/route-not-found';
import { About } from './about';
import { Dashboard } from './dashboard';
import { CardDetail } from './card-detail/index';
import { TransactionDetail } from './transaction-detail';

export const PrivateRoutes = () => {
  return (
    <>
      <RouteNotFound>
        <Route path="/" element={<Navigate to={PRIVATE_ROUTES.dashboard} />} />
        <Route path={PRIVATE_ROUTES.dashboard} element={<Dashboard />} />
        <Route path={PRIVATE_ROUTES.about} element={<About />} />
        <Route
          path={`${PRIVATE_ROUTES.cardDetail}${PRIVATE_ROUTES.slug}`}
          element={<CardDetail />}
        />
        <Route
          path={`${PRIVATE_ROUTES.transactionDetail}${PRIVATE_ROUTES.slug}`}
          element={<TransactionDetail />}
        />
      </RouteNotFound>
    </>
  );
};
