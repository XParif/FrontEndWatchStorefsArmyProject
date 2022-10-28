import GlobalStyle from "../components/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import HomgePage from "../components/home";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomgePage />
      </ThemeProvider>
    </>
  );
}
