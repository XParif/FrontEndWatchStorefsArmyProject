import GlobalStyle from "../components/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import WeeklyProducts from "../components/shared/weeklyProducts";
import SummerSale from "../components/shared/summerSale";
import SpecialFeatures from "../components/shared/specialFeatures";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <h1>Hello TeamLinkedList</h1>
        <WeeklyProducts />
        <SummerSale />
        <SpecialFeatures />
      </ThemeProvider>
    </>
  );
}
