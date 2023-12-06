import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
const ShowSearchedFood = lazy(() => import("./components/ShowSearchedFood"));
import HowWork from "./components/HowWork";
import Popular from "./components/Popular";
import GlobalStyles from "./style/Global";
import Install from "./components/Install";

const theme = {
  colors: {
    login_text: "rgba(255, 138, 0, 1)",
    login_btn_shadow: "rgba(255, 138, 0, 0.4)",
    bg_show_case_first: "rgba(255, 209, 109, 1)",
    bg_show_case_second: "rgba(255, 122, 0, 1)",
    delivery_color: "rgb(241, 114, 40)",
    submit_btn_first: "rgba(255, 122, 122, 1)",
    submit_btn_second: "rgba(246, 89, 0, 1)",
    how_work_bg_first: "rgba(255, 206, 103, 0.22)",
    how_work_bg_second: "rgba(253, 237, 202, 0.1)",
    how_work_title: "rgba(241, 114, 40, 1)",
    popular_btn_slide: "#FAAA01",
    popular_btn_order: "rgb(241, 114, 40)",
    features_bg: "#FEEFD0",
    features_card_shadow: "rgba(210, 150, 32, 0.5)",
    features_card_title_first: "rgba(251, 60, 0, 1)",
    features_card_title_second: "rgba(255, 184, 0, 1)",
    install_app_title: "rgba(255, 184, 0, 1)"
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
      <Popular />
      <Install />

    </ThemeProvider>
  );
};

export default App;
