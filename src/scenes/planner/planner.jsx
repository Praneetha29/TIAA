import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  useTheme
} from "@mui/material";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Subtitle from "../../components/Subtitle";

const Planner = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    currentAge: '',
    retirementAge: '',
    income: '',
    expenses: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {

    console.log("Form submitted:", formData);
  };

  return (
    <Box m="10px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="RETIREMENT PLANNER" subtitle="Securing Your Golden Years" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <Typography variant="h5">
            Give us a few details and the income and expenses on a yearly basis to come up with a personalized retirement plan.
          </Typography>
        </Grid>
        <Grid item xs={3} >
          <TextField
            label="Current Age"
            type="number"
            name="currentAge"
            value={formData.currentAge}
            onChange={handleInputChange}
            fullWidth
            margin="normal"

          />
          <TextField
            label="Desired Retirement Age"
            type="number"
            name="retirementAge"
            value={formData.retirementAge}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Income"
            type="number"
            name="income"
            value={formData.income}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Expenses"
            type="number"
            name="expenses"
            value={formData.expenses}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 18px",
              marginRight: "8px",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" alignItems="center" justifyContent="space-between" marginTop="20px">
        <Subtitle heading="Projected Portfolio Value" />
        <Box
          sx={{
            border: `2px solid ${colors.blueAccent[700]}`,
            borderRadius: "5px",
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "8px 20px",
            display: "flex",
            alignItems: "center",
            marginRight: "20px"
          }}
        >
          Early Retirement
        </Box>
      </Box>
      <Button
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
              margin: "auto",
            }}
          >
            Set A Goal
          </Button>
    </Box>
  );
};

export default Planner;
