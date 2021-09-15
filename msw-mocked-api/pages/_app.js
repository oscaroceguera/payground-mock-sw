import "../styles/globals.css";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
  requestAnimationFrame("../mocks");
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
