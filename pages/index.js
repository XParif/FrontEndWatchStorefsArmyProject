import GlobalStyle from "../components/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <h1>Hello TeamLinkedList</h1>
      </ThemeProvider>
    </>
  );
}
