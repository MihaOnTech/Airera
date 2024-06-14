import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';


const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;