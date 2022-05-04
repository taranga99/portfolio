import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import PortfolioPage from "./pages";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    colors: {
      primary: "#fff",
      secondary: "#2D2A32",
    },
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PortfolioPage />
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#086788" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#2D2A32" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#264653" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#1D3557" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#006D77" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#086788" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#2D2A32" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#264653" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#1D3557" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#006D77" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#086788" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#2D2A32" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#264653" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#1D3557" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#006D77" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#086788" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#2D2A32" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#264653" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#1D3557" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#006D77" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#086788" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#2D2A32" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#264653" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#1D3557" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#006D77" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#086788" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#2D2A32" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#264653" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#1D3557" }}
        ></div>
        <div
          style={{ width: "100px", height: "50px", backgroundColor: "#006D77" }}
        ></div>
      </ThemeProvider>
    </div>
  );
};

export default App;

// font-family: 'Encode Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Work Sans', sans-serif;

//086788
//2D2A32
//264653
//1D3557
//006D77
