import React from 'react';
import { Box, useTheme, Card, CardContent } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import ExpenseMonitor from "../expense/expense";
import Planner from "../planner/planner";
import ApiInfoTable from '../../components/Table'; 
import { tokens } from "../../theme";
import Subtitle from '../../components/Subtitle';



const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
  
    return (
      <Box m="20px" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box display="flex" justifyContent="space-between">

          <Card sx={{ width: "50%", height: "auto", maxHeight: "60vh", overflow: "hidden", background: `${colors.primary[400]} !important`, marginRight: '20px' }}>
            <CardContent>
              <ExpenseMonitor />
            </CardContent>
          </Card>
          

          <Card sx={{ width: "50%", height: "auto", maxHeight: "60vh", overflow: "hidden", background: `${colors.primary[400]} !important` }}>
            <CardContent>
              <Planner />
            </CardContent>
          </Card>
        </Box>
  

        <Card sx={{ width: "30%", flex: 1, overflow: "auto", background: `${colors.primary[400]} !important`, marginTop: '20px' }}>
          <CardContent>
            <Subtitle heading="Top Gainers" sx={{ display:"flex", alignItems:"center", justifyContent:"center" }} />
            <ApiInfoTable maxHeight="25vh" />
          </CardContent>
        </Card>
      </Box>
    );
  };
  
  export default Dashboard;
  