import React from "react";
import { ethers } from "ethers";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import CustomTheme from "./configs/Themes/Theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/Common/ScrollToTop";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import RouteError from "./routes/RouteError";
import Home from "./pages/Home";

function getLibrary(provider: any) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Box>
      <ThemeProvider theme={CustomTheme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Router>
            <ScrollToTop />
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<RouteError />} />
            </Routes>
            {/* <Footer /> */}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Router>
        </Web3ReactProvider>
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
}

export default App;