import { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Footer from "../footer";
import GlobalStyle from "../globalStyles";
import Header from "../header";
import Modal from "./../modal";

export default function Layout({ children }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {openModal && <Modal modalController={setOpenModal} />}
      <Header modalController={setOpenModal} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
