import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyles from "./style/Global";

const theme = {
  colors: {
    login_text: "rgba(255, 138, 0, 1)",
  },
  mobile: "768px",
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
