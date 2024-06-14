import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import AuthPage from './components/pages/AuthPage';
import BarPage from './components/pages/BarPage';
import PrivateRoute from './components/component/PrivateRoute';
import { Flex, Box } from '@chakra-ui/react';

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Routes>
      <Route
        path="/"
        element={!user ? <AuthPage /> : <Navigate to="/bar" />}
      />
      <Route
        path="/bar/*"
        element={
          <PrivateRoute>
            <BarPage />
          </PrivateRoute>
        }
      />
   </Routes>

  );
}

export default App;