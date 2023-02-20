import { Route, Routes } from 'react-router-dom';

const RouteNotFound = ({ children }) => {
  return (
    <>
      <Routes>
        {children}
        <Route path="*" element={<div>not found - component</div>} />
      </Routes>
    </>
  );
};

export default RouteNotFound;
