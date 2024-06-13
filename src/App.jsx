import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import AuthPage from './views/AuthPage';
import BarPage from './views/BarPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import { Flex, Box, Spacer } from '@chakra-ui/react';

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Flex direction="column" minHeight="100vh">
      <Box position="fixed" width="100%" zIndex="docked">
        <Header />
      </Box>
      <Box flex="1" overflowY="auto" pt="52px" width="100%">
        <Routes>
          <Route path="/" element={!user ? <AuthPage /> : <Navigate to="/piscinas" />} />
          <Route path="/piscinas/*" element={<PrivateRoute><BarPage /></PrivateRoute>} />
        </Routes>
     
      <Footer />
      </Box>
    </Flex>

  );
}

export default App;