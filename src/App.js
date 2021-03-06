import Routes from "./routes"
import {PurchasePriceProvider} from "./context/PurchasePrice"
function App() {
  return (
    <PurchasePriceProvider>
      <Routes />
    </PurchasePriceProvider>
  );
}

export default App;
