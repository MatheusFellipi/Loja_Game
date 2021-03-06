import Routes from "./routes";
import {GlobalStyle} from "./styles/Global"
import { PurchasePriceProvider } from "./context/PurchasePrice";
function App() {
  return (
    <PurchasePriceProvider>
      <GlobalStyle />
      <Routes />
    </PurchasePriceProvider>
  );
}

export default App;
