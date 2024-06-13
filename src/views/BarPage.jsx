import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react';
import Pedidos from './bar/Pedidos';
import Historial from './bar/Historial';
import Menu from './bar/Menu';
import Fichar from './bar/Fichar';
import CustomTab from '../components/CustomTab';

function BarPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[2] || "Pedidos"; // Default to "Pedidos"

  const handleTabsChange = index => {
    const paths = ["Pedidos", "Historial", "Menu", "Fichar"];
    navigate(paths[index]);
  };

  return (
    <Tabs isFitted variant="enclosed" index={["Pedidos", "Historial", "Menu", "Fichar"].indexOf(path)} onChange={handleTabsChange}>
      <TabList >
        <CustomTab>Pedidos</CustomTab>
        <CustomTab>Historial</CustomTab>
        <CustomTab>Carta</CustomTab>
        <CustomTab>Fichar</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Pedidos />
        </TabPanel>
        <TabPanel>
          <Historial />
        </TabPanel>
        <TabPanel>
          <Menu />
        </TabPanel>
        <TabPanel>
          <Fichar />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default BarPage;
