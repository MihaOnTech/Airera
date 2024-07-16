import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import AuthPage from './components/pages/AuthPage';
import BarPage from './components/pages/BarPage';
import OfficePage from './components/pages/OfficePage';
import PrivateRoute from './components/component/PrivateRoute';
import SelectionPage from './components/pages/SelectionPage';
import { Flex, Box } from '@chakra-ui/react';

function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Routes>
      <Route path="/" element={!user ? <AuthPage /> : <Navigate to="/selection" />} />
      <Route path="/selection" element={<PrivateRoute><SelectionPage /></PrivateRoute>} />
      <Route path="/bar/*" element={<PrivateRoute><BarPage /></PrivateRoute>} />
      <Route path="/office/*" element={<PrivateRoute><OfficePage /></PrivateRoute>} />
    </Routes>

  );
}

export default App;