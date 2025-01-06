import '../styles/globals.css';
import { ScrollProvider } from '../context/ScrollContext';

function MyApp({ Component, pageProps }) {
  return (
    <ScrollProvider>
      <Component {...pageProps} />
    </ScrollProvider>
  );
}

export default MyApp;
