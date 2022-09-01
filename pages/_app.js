import ScrollToTopButton from "components/ScrollToTopButton";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  );
}

export default MyApp;
