import "../styles/globals.scss";
import "../styles/font.scss";
import "../styles/main.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
