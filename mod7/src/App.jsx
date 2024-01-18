import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import Emoji from "./components/Emoji";
import NavBar from "./components/NavBar";
import AppRoutes from './routes/AppRoutes'
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <>
    <NavBar/>
      <BitcoinRates/>
      <AppRoutes/>
      <EmojiProvider>
      <Emoji />
    </EmojiProvider>
    </>
  );
}

export default App;