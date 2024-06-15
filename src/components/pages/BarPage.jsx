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
import Pedidos from "../panels/PedidosPanel";
import CustomTab from "../component/CustomTab";

const BarPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2] || "Ventas"; // Default to "Pedidos"

  const handleTabsChange = (index) => {
    const paths = ["Ventas", "Pedidos", "Historial", "Caja", "Fichar"];
    navigate(paths[index]);
  };

  return (
    <Box>
      <ProductsProvider>
        <SalesProvider>
          <Tabs
            position="fixed"
            width="100%"
            zIndex="docked"
            isFitted
            variant="enclosed"
            index={["Ventas", "Pedidos", "Historial", "Caja", "Fichar"].indexOf(
              path
            )}
            onChange={handleTabsChange}
            bg="brand.300"
            color="brand.400"
          >
            <TabList height="10vh">
              <CustomTab>Ventas</CustomTab>
              <CustomTab>Pedidos</CustomTab>
              <CustomTab>Historial</CustomTab>
              <CustomTab>Caja</CustomTab>
              <CustomTab>Fichar</CustomTab>
            </TabList>
            <TabPanels
              borderColor="black"
              bg="brand.200"
              borderWidth="3px"
              height="90vh"
              borderTop="0px"
            >
              <TabPanel>
                <Ventas />
              </TabPanel>
              <TabPanel>
                <Pedidos />
              </TabPanel>
              <TabPanel>
                <Historial />
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
