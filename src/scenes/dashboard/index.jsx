import React from 'react';
import { Box, useTheme, Card, CardContent, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import ExpenseMonitor from "../expense/expense";
import Planner from "../planner/planner";
import ApiInfoTable from '../../components/Table';
import { tokens } from "../../theme";
import Subtitle from '../../components/Subtitle';


import FinanceImage from '../../assets/Finance.svg';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleInvestButtonClick = () => {
 
    window.location.href = 'https://www.tiaa.org/public/invest/financial-products';
  };

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

        <Card sx={{ width: "50%", height: "auto", maxHeight: "80vh", overflow: "hidden", background: `${colors.primary[400]} !important` }}>
          <CardContent>
            <Planner />
          </CardContent>
        </Card>
      </Box>
     <Box display="flex"   width="50%">
      <Card sx={{ width: "60%", flex: 1, overflow: "auto", background: `${colors.primary[400]} !important`, marginTop: '20px', marginRight: '20px' }}>
        <CardContent>
          <Subtitle heading="Top Gainers" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} />
          <ApiInfoTable maxHeight="25vh" />
        </CardContent>
      </Card>

  
      <Card sx={{ width: "30%", flex: 'none', overflow: "auto", background: `${colors.primary[400]} !important`, marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h6" align="center">
       
            <img src={FinanceImage} alt="Finance" style={{ width: '60%', height: '50%', marginBottom: 1 }} />
          </Typography>
          <Typography variant="h2" align="center">
            Want to Invest?
          </Typography>
          <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
            Have a look at our products
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleInvestButtonClick}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 18px",
              marginRight: "8px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              margin: "auto",}}

          >
            Products
          </Button>
        </CardContent>
      </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
