import { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Footer from "../footer";
import GlobalStyle from "../globalStyles";
import Header from "../header";
import Modal from "./../modal";
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import {client, modalController} from '../../apolloClient/index';
import Message from "../message";


export default function Layout({ children }) {
  const openModal  = useReactiveVar(modalController)
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
        <Message/>
        <GlobalStyle />
        {openModal && <Modal modalController={modalController} />}
        <Header modalController={modalController} />
        <main>{children}</main>
        <Footer />
      
    </ThemeProvider>
    </ApolloProvider>
  );
}
