import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  VStack,
  Heading,
  Text,
  useColorModeValue as mode,
  Flex,
} from '@chakra-ui/react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const toast = useToast();

  const handleAuth = async () => {
    if (isLogin) {
      signInWithEmailAndPassword(email, password);
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };

  if (error) {
    toast({
      title: "Authentication Error",
      description: error.message,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  if (user) {
    toast({
      title: "Login Success",
      description: "You have successfully logged in.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg={mode('white', 'gray.700')}>
        <VStack spacing={4} align="flex-start">
          <Heading>{isLogin ? 'Login' : 'Sign Up'}</Heading>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button width="full" mt={4} onClick={handleAuth} isLoading={loading}>
            {isLogin ? 'Login' : 'Create Account'}
          </Button>
          <Button width="full" mt={2} variant="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AuthForm;
