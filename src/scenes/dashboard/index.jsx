import React from 'react';
import { Box, useTheme, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import Header from "../../components/Header";
import ExpenseMonitor from "../expense/expense";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Card sx={{ width: "50%", height: "auto", maxHeight: "50vh", overflow: "hidden" ,background: `${colors.primary[400]} !important`}}>
        <CardContent>
          <ExpenseMonitor />
        </CardContent>
      </Card>
    
    </Box>
  );
};

export default Dashboard;
