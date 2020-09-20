import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { Global } from "styles/Global";
import { useRouter } from "next/router";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
