import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { lightTheme } from "./themes/LightTheme";

function App() {
  return (
    
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <BrowserRouter>
          <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          </Routes>
          </AuthProvider>
    </BrowserRouter>
        
    </ThemeProvider>
    
  );
}

export default App;
