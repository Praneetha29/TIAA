import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  useTheme,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Subtitle from "../../components/Subtitle";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const predefinedCategories = ["Food", "Social Life", "Transport", "Household", "Other"];

const getCurrentDateTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}:${seconds}`,
  };
};

const ExpenseMonitor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [expenseData, setExpenseData] = useState({
    type: "Expense",
    date: getCurrentDateTime().date,
    category: "",
    detail: "",
    amount: "",
    currency: "INR",
  });
  const [transactionsList, setTransactionsList] = useState([]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveTransaction = () => {
    setTransactionsList((prevList) => [...prevList, expenseData]);
    setDialogOpen(false);
    setExpenseData({
      type: "Expense",
      date: getCurrentDateTime().date,
      category: "",
      detail: "",
      amount: "",
      currency: "INR",
    });
  };

  return (
    <Box m="10px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EXPENSE MONITOR" subtitle="Tracking Finances, Empowering Future" />
        <Box display="flex" alignItems="center">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 18px",
              marginRight: "8px",
            }}
          >
            Total Balance
          </Button>
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
            }}
          >
            <CurrencyRupeeOutlinedIcon sx={{ marginRight: "8px", width: "auto" }} />
            Value
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Subtitle heading="Recent Transactions" />
        <AddCircleOutlineIcon
          onClick={handleDialogOpen}
          sx={{
            cursor: "pointer",
            width: "3%",
            height: "auto",
          }}
        />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 18px",
            marginRight: "10px",
          }}
        >
          See All
        </Button>
      </Box>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle sx={{ backgroundColor: colors.blueAccent[700] }}>Add New Transaction</DialogTitle>
        <DialogContent sx={{ backgroundColor: colors.blueAccent[700] }}>
          <Select
            label="Type"
            name="type"
            value={expenseData.type}
            onChange={handleInputChange}
            sx={{ marginBottom: "10px", width: "100%" }}
          >
            <MenuItem value="Expense">Expense</MenuItem>
            <MenuItem value="Income">Income</MenuItem>
          </Select>
          <TextField
            label="Date"
            type="date"
            name="date"
            value={expenseData.date}
            onChange={handleInputChange}
            sx={{ marginBottom: "10px", width: "100%" }}
          />
          <Select
            label="Category"
            name="category"
            value={expenseData.category}
            onChange={handleInputChange}
            sx={{ marginBottom: "10px", width: "100%" }}
          >
            {predefinedCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Detail"
            name="detail"
            value={expenseData.detail}
            onChange={handleInputChange}
            sx={{ marginBottom: "10px", width: "100%" }}
          />
          <TextField
            label="Amount"
            type="number"
            name="amount"
            value={expenseData.amount}
            onChange={handleInputChange}
            sx={{ marginBottom: "10px", width: "100%" }}
          />
          <Select
            label="Currency"
            name="currency"
            value={expenseData.currency}
            onChange={handleInputChange}
            sx={{ marginBottom: "10px", width: "100%" }}
          >
            <MenuItem value="INR">INR (Indian Rupee)</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: colors.blueAccent[700] }}>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSaveTransaction} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Grid container spacing={2}>
        {transactionsList.map((transaction, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Paper
              sx={{
                marginTop: "10px",
                padding: "16px",
                opacity: 0.9,
                background: `${colors.greenAccent[600]} !important`,
                color: `${colors.grey[100]}` 
          
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h3" sx={{ marginBottom: "6px", fontWeight: "semibold" }}>
                    {transaction.category}
                  </Typography>
                  {transaction.detail && (
                    <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                      {transaction.detail}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h3" sx={{ marginBottom: "6px", textAlign: "right", fontWeight: "bold" }}>
                    {`${transaction.amount} ${transaction.currency}`}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "right" }}>
                    {`${transaction.date}`}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpenseMonitor;