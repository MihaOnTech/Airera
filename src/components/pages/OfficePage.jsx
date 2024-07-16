// OfficePage.js
import React, { useState } from 'react';
import { Box, Flex, IconButton, Text, VStack, HStack } from '@chakra-ui/react';
import { FaHome, FaPlus, FaChartPie } from 'react-icons/fa';
import AddExpenseForm from '../forms/AddExpenseForm';
import ExpenseChart from '../component/ExpenseChart';

const OfficePage = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Text>Home Content</Text>;
      case 'chart':
        return <ExpenseChart />;
      case 'addExpense':
        return <AddExpenseForm />;
      default:
        return <Text>Home Content</Text>;
    }
  };

  return (
    <Flex direction="column" height="100vh">
      <Box as="header" bg="teal.500" color="white" padding="4" textAlign="center">
        <Text fontSize="lg" fontWeight="bold">Office Page</Text>
      </Box>

      <Box as="main" flex="1" overflowY="auto" padding="4">
        {renderContent()}
      </Box>

      <Box as="footer" bg="gray.100" padding="2">
        <HStack justifyContent="space-around">
          <IconButton
            icon={<FaHome />}
            aria-label="Home"
            onClick={() => setActiveTab('home')}
          />
          <IconButton
            icon={<FaChartPie />}
            aria-label="Chart"
            onClick={() => setActiveTab('chart')}
          />
          <IconButton
            icon={<FaPlus />}
            aria-label="Add Expense"
            onClick={() => setActiveTab('addExpense')}
          />
        </HStack>
      </Box>
    </Flex>
  );
};

export default OfficePage;
