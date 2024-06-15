import { Tab } from "@chakra-ui/react";

const CustomTab = ({ children }) => {
  return (
    <Tab
      fontSize="25px"
      borderBottom="3px solid"
      _selected={{
        borderTop: "3px solid",
        borderBottom: "0",
        borderLeft: "3px solid",
        borderRight: "3px solid",
        bg: "brand.200",
      }}
    >
      {children}
    </Tab>
  );
};

export default CustomTab;
