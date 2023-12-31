import { ColorModeContext, useMode } from "./theme"; 
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/topBar";
import  Dashboard  from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import SideBar from "./scenes/global/sideBar";
import ExpenseMonitor from "./scenes/expense/expense.jsx";
 import Planner from "./scenes/planner/planner.jsx";
import Strategist from "./scenes/strategist/strategist.jsx";
function App() {
  const [theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
    <SideBar />
      <main className="content">
        <TopBar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
           <Route path="/expense" element={<ExpenseMonitor/>}/>
          <Route path="/planner" element={<Planner/>}/>
          <Route path="/strategist" element={<Strategist/>}/> 
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
