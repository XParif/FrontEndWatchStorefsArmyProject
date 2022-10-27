
import GlobalStyle from "../components/globalStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
