// // ProtectedRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoutes = ({ element: Component, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check for a token in local storage

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? Component : <Redirect to="/signup" />}
//     />
//   );
// };



// export default ProtectedRoutes;


// // ProtectedRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoutes = ({ element: Component, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check for a token in local storage

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? Component : <Navigate to="/signup" />}
//     />
//   );
// };

// export default ProtectedRoutes;



import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const token = localStorage.getItem('token'); // Check if the token is saved

  return token ? <Component /> : <Navigate to="/signup" />;
};

export default ProtectedRoute;
