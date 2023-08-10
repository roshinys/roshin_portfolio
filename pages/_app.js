import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavigationBar from "@/components/Layout/NavigationBar";
import LoadingScreen from "@/components/UI/LoadingScreen";
import LiquidIconsFooter from "@/components/Layout/LiquidIconsFooter";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <LoadingScreen> */}
      <NavigationBar />
      <Component {...pageProps} />
      <LiquidIconsFooter />
      {/* </LoadingScreen> */}
    </>
  );
}
