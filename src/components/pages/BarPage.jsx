import { useNavigate, useLocation } from "react-router-dom";
import {
  Tabs,
  Container,
  Box,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { SalesProvider } from "../../contexts/SalesContext";
import Historial from "../panels/HistorialPanel";
import Caja from "../panels/CajaPanel";
import Fichar from "../panels/FicharPanel";
import Ventas from "../panels/VentasPanel";
import Tareas from "../panels/TareasPanel";
import CustomTab from "../component/CustomTab";

const BarPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2] || "Ventas"; // Default to "Pedidos"

  const handleTabsChange = (index) => {
    const paths = ["Ventas", "Historial", "Pedidos", "Caja", "Fichar"];
    navigate(paths[index]);
  };

  return (
    <Box>
      <ProductsProvider>
        <SalesProvider>
          <Tabs
            width="100%"
            zIndex="docked"
            isFitted
            variant="enclosed"
            index={["Ventas", "Historial", "Pedidos", "Caja", "Fichar"].indexOf(
              path
            )}
            onChange={handleTabsChange}
            bg="brand.300"
            
          >
            <TabList height="10vh" >
              <CustomTab>Ventas</CustomTab>
              <CustomTab>Historial</CustomTab>
              <CustomTab>Tareas</CustomTab>
              <CustomTab>Caja</CustomTab>
              <CustomTab>Fichar</CustomTab>
            </TabList>
            <TabPanels
              borderColor="black"
              bg="brand.200"
              borderWidth="3px"
              height="100%"
              borderTop="0px"
            >
              <TabPanel>
                <Ventas />
              </TabPanel>
              <TabPanel>
                <Historial />
              </TabPanel>
              <TabPanel>
                <Tareas />
              </TabPanel>
              <TabPanel>
                <Caja />
              </TabPanel>
              <TabPanel>
                <Fichar />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </SalesProvider>
      </ProductsProvider>
    </Box>
  );
};

export default BarPage;
