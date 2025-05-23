import { Outlet } from "react-router-dom";
import { Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const EmployeesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine which tab should be active based on the current path
  const getActiveTabIndex = () => {
    const path = location.pathname;
    if (path.includes("/attendance")) return 1;
    if (path.includes("/sales-tracking")) return 2;
    if (path.includes("/top-performers")) return 3;
    if (path.includes("/shift-reports")) return 4;
    return 0;
  };
  
  // Handle tab changes by navigating to the appropriate route
  const handleTabChange = (index: number) => {
    const routes = [
      "/admin/employees",
      "/admin/employees/attendance",
      "/admin/employees/sales-tracking",
      "/admin/employees/top-performers",
      "/admin/employees/shift-reports",
    ];
    navigate(routes[index]);
  };
  
  return (
    <Box bg="white" w="100%">
      {/* Tabs Navigation */}
      <Tabs
        variant="unstyled"
        onChange={handleTabChange}
        defaultIndex={getActiveTabIndex()}
        flex="1"
        display="flex"
        flexDirection="column"     
      >
        <TabList
          bg="white"
          borderBottom="8px solid #003153"
          borderRight="10px solid #003153"
          display="flex"
          width="100%"
          mt="16px"
          sx={{
            "& > button": {
              fontWeight: "500",
              fontSize: 16,
              py: 4,
              px: 8,
              borderBottom: "none",
              borderTopRadius: "16px",
              flex: 1,
              textAlign: "center",
              maxWidth: "200px",
              backgroundColor: "white",
              color: "black",
              position: "relative",
              zIndex: 1,
            },
            "& > button[aria-selected=true]": {
              bg: "#003153",
              color: "white",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              zIndex: 2,
            },
            "& > button[aria-selected=false]": {
              bg: "white",
              color: "black",
            },
          }}
        >
          <Tab>Dashboard</Tab>
          <Tab>Employee Attendance</Tab>
          <Tab>Sales Tracking</Tab>
          <Tab>Top Performers</Tab>
          <Tab>Shift Reports</Tab>
        </TabList>
        
        {/* Content area for child routes */}
        <Box p={4}>
          <Outlet />
        </Box>
      </Tabs>
    </Box>
  );
};

export default EmployeesPage;