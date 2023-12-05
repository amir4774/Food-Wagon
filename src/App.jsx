import { lazy, Suspense } from "react";
const ShowSearchedFood = lazy(() => import("./components/ShowSearchedFood"));


import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import GlobalStyles from "./style/Global";
import HowWork from "./components/HowWork";

const theme = {
  colors: {
    login_text: "rgba(255, 138, 0, 1)",
    bg_show_case_first: "rgba(255, 209, 109, 1)",
    bg_show_case_second: "rgba(255, 122, 0, 1)",
    delivery_color: "rgb(241, 114, 40)",
    submit_btn_first: "rgba(255, 122, 122, 1)",
    submit_btn_second: "rgba(246, 89, 0, 1)",
    how_work_bg_first: "rgba(255, 206, 103, 0.22)",
    how_work_bg_second: "rgba(253, 237, 202, 0)",
    how_work_title: "rgba(241, 114, 40, 1)",
  },
  mobile: "768px",
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <ShowCase />

      <Suspense fallback={<h2>Loading...</h2>}>
        <ShowSearchedFood />
      </Suspense>

      <HowWork />

    </ThemeProvider>
  );
};

export default App;
